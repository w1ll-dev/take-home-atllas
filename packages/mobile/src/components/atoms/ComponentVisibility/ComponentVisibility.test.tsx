import { Text } from "react-native";
import { render } from "@testing-library/react-native";
import { ComponentVisibility } from "./ComponentVisibility";

const textToRender = "COMPONENT";

describe("ComponentVisibility", () => {
  it("Should return null if `isVisible` is false", () => {
    const { toJSON } = render(
      <ComponentVisibility isVisible={false}>
        <Text>{textToRender}</Text>
      </ComponentVisibility>,
    );

    expect(toJSON()).toBeFalsy();
  });

  it("Should render correctly if `isVisible` is true", () => {
    const { getByText } = render(
      <ComponentVisibility isVisible={true}>
        <Text>{textToRender}</Text>
      </ComponentVisibility>,
    );

    const textResult = getByText(textToRender);

    expect(textResult).toBeTruthy();
  });
});
