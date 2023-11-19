import * as yup from "yup";
import { MIN_PASSWORD_CHAR } from "../constants";
const texts = {
  login: "Login",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof LoginFieldValues, string>
> = {
  errors: {
    email: "Please, provide a valid email.",
    password: `Please provide a password of at least ${MIN_PASSWORD_CHAR} characters.`,
  },
  labels: {
    email: "Email",
    password: "Password",
  },
  placeholders: {
    email: "Email",
    password: "Password",
  },
};

const yupLoginSchema = yup.object().shape<YupSchemaShape<LoginFieldValues>>({
  email: yup
    .string()
    .email(textValidations.errors.email)
    .required(textValidations.errors.email),
  password: yup
    .string()
    .min(MIN_PASSWORD_CHAR, textValidations.errors.password)
    .required(textValidations.errors.password),
});

export { textValidations, texts, yupLoginSchema, MIN_PASSWORD_CHAR };
