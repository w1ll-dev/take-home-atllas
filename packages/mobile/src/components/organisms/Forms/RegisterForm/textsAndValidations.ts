import * as yup from "yup";
import { MIN_PASSWORD_CHAR, MIN_USERNAME_CHAR } from "../constants";

const onlyLettersRegex = /^[A-Za-z]+$/;

const texts = {
  register: "Register",
  registerError: "❌ Register error",
  success: "✅ Success",
  pleaseTryAgain: "Please try again",
  nowPlease: "Now please, sign in with your credentials.",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof RegisterFieldValues, string>
> = {
  errors: {
    firstName: "Please, provide your first name.",
    lastName: "Please, provide your last name.",
    username: "Please, provide your username.",
    password: `Please, provide a password of at least ${MIN_PASSWORD_CHAR} characters.`,
    passwordConfirmation: "Password must match.",
  },
  labels: {
    firstName: "First Name",
    lastName: "Last Name",
    username: "Username",
    password: "Password",
    passwordConfirmation: "Password Confirmation",
  },
  placeholders: {
    firstName: "First Name",
    lastName: "Last Name",
    username: "Username",
    password: "Password",
    passwordConfirmation: "Password Confirmation",
  },
};

const yupRegisterSchema = yup
  .object()
  .shape<YupSchemaShape<RegisterFieldValues>>({
    firstName: yup
      .string()
      .required(textValidations.errors.firstName)
      .matches(new RegExp(onlyLettersRegex), textValidations.errors.firstName),
    lastName: yup
      .string()
      .required(textValidations.errors.lastName)
      .matches(new RegExp(onlyLettersRegex), textValidations.errors.lastName),
    username: yup
      .string()
      .min(MIN_USERNAME_CHAR, textValidations.errors.username)
      .required(textValidations.errors.username),
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

export { textValidations, texts, yupRegisterSchema };
