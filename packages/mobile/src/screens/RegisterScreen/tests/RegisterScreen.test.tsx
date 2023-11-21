import { registerTestIDs } from "@constants";
import { act, fireEvent } from "@testing-library/react-native";
import { customRender, withBottomSheetHOC } from "jest/customRender";
import { RegisterScreen } from "../RegisterScreen";
import { textValidations } from "@organisms/Forms/RegisterForm/textsAndValidations";

describe("RegisterScreen", () => {
  it("Should have first name field", () => {
    const { getByTestId } = customRender(<RegisterScreen />);

    const firstNameInput = getByTestId(registerTestIDs.firstNameField);

    expect(firstNameInput).toBeDefined();
  });

  it("Should have last name field", () => {
    const { getByTestId } = customRender(
      withBottomSheetHOC(<RegisterScreen />),
    );

    const usernameInput = getByTestId(registerTestIDs.lastNameField);

    expect(usernameInput).toBeDefined();
  });

  it("Should have password field", () => {
    const { getByTestId } = customRender(
      withBottomSheetHOC(<RegisterScreen />),
    );

    const usernameInput = getByTestId(registerTestIDs.passwordField);

    expect(usernameInput).toBeDefined();
  });

  it("Should have password confirmation field", () => {
    const { getByTestId } = customRender(
      withBottomSheetHOC(<RegisterScreen />),
    );

    const usernameInput = getByTestId(registerTestIDs.passwordField);

    expect(usernameInput).toBeDefined();
  });

  it("Should show correct error message for each input", async () => {
    const { getByTestId, getByText, getAllByText } = customRender(
      withBottomSheetHOC(<RegisterScreen />),
    );

    const registerButton = getByTestId(registerTestIDs.registerButton);

    await act(() => fireEvent.press(registerButton));

    const firstNameErrorMessage = getByText(textValidations.errors.firstName);
    const lastNameErrorMessage = getByText(textValidations.errors.lastName);
    const usernameErrorMessage = getByText(textValidations.errors.username);
    const passwordErrorMessages = getAllByText(textValidations.errors.password);

    expect(firstNameErrorMessage).toBeDefined();
    expect(lastNameErrorMessage).toBeDefined();
    expect(usernameErrorMessage).toBeDefined();
    expect(passwordErrorMessages.length).toBe(2);
  });
});
