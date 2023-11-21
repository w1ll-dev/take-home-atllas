const withPrefix = (featureToTest: string, label: string) =>
  `${featureToTest}-${label}`;

const loginFeatureToTest = "login";

const loginTestIDs = {
  usernameField: withPrefix(loginFeatureToTest, "usernameField"),
  passwordField: withPrefix(loginFeatureToTest, "passwordField"),
  loginButton: withPrefix(loginFeatureToTest, "loginButton"),
};

const registerFeatureToTest = "register";

const registerTestIDs = {
  firstNameField: withPrefix(registerFeatureToTest, "firstNameField"),
  lastNameField: withPrefix(registerFeatureToTest, "lastNameField"),
  usernameField: withPrefix(registerFeatureToTest, "usernameField"),
  passwordField: withPrefix(registerFeatureToTest, "passwordField"),
  passwordConfirmationField: withPrefix(
    registerFeatureToTest,
    "passwordConfirmationField",
  ),
  registerButton: withPrefix(registerFeatureToTest, "registerButton"),
};

export { loginTestIDs, registerTestIDs };
