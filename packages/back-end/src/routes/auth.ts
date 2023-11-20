import IRoute from "../types/IRoute";
import { Router } from "express";
import { compareSync, hashSync } from "bcrypt";
import { attachSession } from "../middleware/auth";
import { sequelize, Session, User } from "../services/db";
import { randomBytes } from "crypto";

type SessionConfig = {
  session?: Session;
  sessionToken?: string;
  error?: Error;
};

const getSessionConfig = async (
  user,
  response
): Promise<SessionConfig | null> => {
  // We now know the user is valid so it's time to mint a new session token.
  const sessionToken = randomBytes(32).toString("hex");
  let session;

  try {
    // Persist the token to the database.
    session = await Session.create({
      token: sessionToken,
      user: user.dataValues.id,
    });

    if (!session) {
      // Something broke on the database side. Not much we can do.
      return {
        error: passError("Returned session was nullish.", null, response),
      };
    }

    return {
      session,
      sessionToken,
    };
  } catch (e) {
    return {
      error: passError("Failed to create session.", e, response),
    };
  }
};

const AuthRouter: IRoute = {
  route: "/auth",
  router() {
    const router = Router();
    router.use(attachSession);

    // If we're authenticated, return basic user data.
    router.get("/", (req, res) => {
      if (req.session?.token?.id) {
        const {
          token: { token, ...session },
          user: { password, ...user },
        } = req.session;
        return res.json({
          success: true,
          message: "Authenticated",
          data: {
            session,
            user,
          },
        });
      } else {
        return res.json({
          success: false,
          message: "Not Authenticated",
        });
      }
    });

    // Attempt to log in
    router.post("/login", async (req, res) => {
      const { username, password } = req.body;

      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: "Missing username/password.",
        });
      }

      const user = await User.findOne({
        where: sequelize.where(
          sequelize.fn("lower", sequelize.col("username")),
          sequelize.fn("lower", username)
        ),
      }).catch((err) => console.error("User lookup failed.", err));

      // Ensure the user exists. If not, return an error.
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid username/password.",
        });
      }

      // Ensure the password is correct. If not, return an error.
      if (!compareSync(password, user.dataValues.password)) {
        return res.status(401).json({
          success: false,
          message: "Invalid username/password.",
        });
      }

      const sessionConfig = await getSessionConfig(user, res);

      if (!!sessionConfig.error) {
        return sessionConfig.error;
      }

      // We set the cookie on the response so that browser sessions will
      // be able to use it.
      res.cookie("SESSION_TOKEN", sessionConfig.sessionToken, {
        expires: new Date(Date.now() + 3600 * 24 * 7 * 1000), // +7 days
        secure: false,
        httpOnly: true,
      });

      // We return the cookie to the consumer so that non-browser
      // contexts can utilize it easily. This is a convenience for the
      // take-home so you don't have to try and extract the cookie from
      // the response headers etc. Just know that this is a-standard
      // in non-oauth flows :)
      return res.json({
        success: true,
        message: "Authenticated Successfully.",
        data: {
          token: sessionConfig.sessionToken,
        },
      });
    });

    // Attempt to register
    router.post("/register", async (req, res) => {
      const { username, password, displayName } = req.body;

      if (!username || !password || !displayName) {
        return res.status(400).json({
          success: false,
          message: "Missing username/password/displayName.",
        });
      }

      try {
        // Create user
        const user = await User.create({
          displayName,
          username,
          password: hashSync(password, 12),
          id: Number(Date.now()),
          registered: new Date(),
        });

        const sessionConfig = await getSessionConfig(user, res);

        return res.json({
          success: true,
          message: "Registered Successfully.",
          data: {
            token: sessionConfig.sessionToken,
          },
        });
      } catch (e) {
        return passError("Failed to create user.", e, res);
      }
    });

    // Log out
    router.post("/logout", (req, res) => {
      // TODO
    });

    return router;
  },
};

export default AuthRouter;

function passError(message, error, response) {
  console.error(message, error);
  return response.status(500).json({
    success: false,
    message: `Internal: ${message}`,
  });
}
