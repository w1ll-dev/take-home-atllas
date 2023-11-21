import { UniqueConstraintError } from "sequelize";
import { Session } from "../services/db";
import { randomBytes } from "crypto";

type SessionConfig = {
  session?: Session;
  sessionToken?: string;
  error?: Error;
};

export const getSessionConfig = async (
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

export function passError(message, error, response) {
  console.error(message, error);
  return response.status(500).json({
    success: false,
    message: `Internal: ${message}`,
  });
}
