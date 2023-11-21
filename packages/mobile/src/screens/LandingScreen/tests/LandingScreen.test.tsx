import { loginTestIDs } from "@constants";
import { textValidations } from "@organisms/Forms/LoginForm/textsAndValidations";
import { act, fireEvent } from "@testing-library/react-native";
import { customRender, withBottomSheetHOC } from "jest/customRender";
import { LandingScreen } from "../LandingScreen";

describe("LandingScreen", () => {
  it("Should have username field", () => {
    const { getByTestId } = customRender(withBottomSheetHOC(<LandingScreen />));

    const usernameInput = getByTestId(loginTestIDs.usernameField);

    expect(usernameInput).toBeDefined();
  });

  it("Should have password field", () => {
    const { getByTestId } = customRender(withBottomSheetHOC(<LandingScreen />));

    const usernameInput = getByTestId(loginTestIDs.passwordField);

    expect(usernameInput).toBeDefined();
  });

  it("Should show error message for empty username", async () => {
    const { getByTestId, getByText } = customRender(
      withBottomSheetHOC(<LandingScreen />),
    );

    const loginButton = getByTestId(loginTestIDs.loginButton);

    await act(() => fireEvent.press(loginButton));

    const errorMessage = getByText(textValidations.errors.username);

    expect(errorMessage).toBeTruthy();
  });

  it("Should show error message for empty password", async () => {
    const { getByTestId, getByText } = customRender(
      withBottomSheetHOC(<LandingScreen />),
    );

    const loginButton = getByTestId(loginTestIDs.loginButton);

    await act(() => fireEvent.press(loginButton));

    const errorMessage = getByText(textValidations.errors.password);

    expect(errorMessage).toBeTruthy();
  });
});
