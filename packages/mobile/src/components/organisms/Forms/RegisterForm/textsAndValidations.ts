import * as yup from "yup";
import {
  loginValidations,
  textValidations as loginTextsAndValidations,
} from "../LoginForm/textsAndValidations";
import { MIN_PASSWORD_CHAR } from "../constants";

const onlyLettersRegex = /^[A-Za-z]+$/;

const texts = {
  register: "Register",
  registerError: "❌ Register error",
  success: "✅ Success",
  nowPlease: "Now please, sign in with your credentials.",
};

const textValidations: Record<
  "errors" | "labels" | "placeholders",
  Record<keyof RegisterFieldValues, string>
> = {
  errors: {
    username: loginTextsAndValidations.errors.username,
    password: loginTextsAndValidations.errors.password,
    firstName: "Please, provide your first name.",
    lastName: "Please, provide your last name.",
    passwordConfirmation: "Password must match.",
  },
  labels: {
    username: loginTextsAndValidations.labels.username,
    password: loginTextsAndValidations.labels.password,
    firstName: "First Name",
    lastName: "Last Name",
    passwordConfirmation: "Password Confirmation",
  },
  placeholders: {
    username: loginTextsAndValidations.placeholders.username,
    password: loginTextsAndValidations.placeholders.password,
    firstName: "First Name",
    lastName: "Last Name",
    passwordConfirmation: "Password Confirmation",
  },
};

const yupRegisterSchema = yup
  .object()
  .shape<YupSchemaShape<RegisterFieldValues>>({
    ...loginValidations,
    firstName: yup
      .string()
      .required(textValidations.errors.firstName)
      .matches(new RegExp(onlyLettersRegex), textValidations.errors.firstName),
    lastName: yup
      .string()
      .required(textValidations.errors.lastName)
      .matches(new RegExp(onlyLettersRegex), textValidations.errors.lastName),
    passwordConfirmation: yup
      .string()
      .min(MIN_PASSWORD_CHAR, loginTextsAndValidations.errors.password)
      .required(loginTextsAndValidations.errors.password)
      .test(
        "passwords-match",
        textValidations.errors.passwordConfirmation,
        function (value) {
          return this.parent.password === value;
        },
      ),
  });

export { textValidations, texts, yupRegisterSchema };
