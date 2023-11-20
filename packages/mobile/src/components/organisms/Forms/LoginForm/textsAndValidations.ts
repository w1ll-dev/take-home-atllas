import * as yup from "yup";
import { MIN_PASSWORD_CHAR, MIN_USERNAME_CHAR } from "../constants";
const texts = {
  login: "Login",
  invalidCredentials: "😔 Invalid credentials",
  pleaseTryAgain: "Please try again",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof LoginFieldValues, string>
> = {
  errors: {
    username: `Please provide a username of at least ${MIN_USERNAME_CHAR} characters without space.`,
    password: `Please provide a password of at least ${MIN_PASSWORD_CHAR} characters.`,
  },
  labels: {
    username: "Username",
    password: "Password",
  },
  placeholders: {
    username: "Username",
    password: "Password",
  },
};

const yupLoginSchema = yup.object().shape<YupSchemaShape<LoginFieldValues>>({
  username: yup
    .string()
    .test(
      "no-space",
      textValidations.errors.username,
      value => !value.includes(" "),
    )
    .required(textValidations.errors.username),
  password: yup
    .string()
    .min(MIN_PASSWORD_CHAR, textValidations.errors.password)
    .required(textValidations.errors.password),
});

export { textValidations, texts, yupLoginSchema };
