import * as yup from "yup";
import { MIN_PASSWORD_CHAR } from "../constants";

const texts = {
  register: "Register",
  welcome: "Welcome",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof RegisterFieldValues, string>
> = {
  errors: {
    firstName: "Please, provide your first name.",
    lastName: "Please, provide your last name.",
    email: "Please, provide a valid email address.",
    password: `Please, provide a password of at least ${MIN_PASSWORD_CHAR} characters.`,
    passwordConfirmation: "Password must match.",
  },
  labels: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    passwordConfirmation: "Password Confirmation",
  },
  placeholders: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    passwordConfirmation: "Password Confirmation",
  },
};

const yupRegisterSchema = yup
  .object()
  .shape<YupSchemaShape<RegisterFieldValues>>({
    firstName: yup.string().required(textValidations.errors.firstName),
    lastName: yup.string().required(textValidations.errors.lastName),
    email: yup
      .string()
      .email(textValidations.errors.email)
      .required(textValidations.errors.email),
    password: yup
      .string()
      .min(MIN_PASSWORD_CHAR, textValidations.errors.password)
      .required(textValidations.errors.password),
    passwordConfirmation: yup
      .string()
      .min(MIN_PASSWORD_CHAR, textValidations.errors.password)
      .test(
        "passwords-match",
        textValidations.errors.passwordConfirmation,
        function (value) {
          return this.parent.password === value;
        },
      ),
  });

export { yupRegisterSchema, textValidations, texts };
