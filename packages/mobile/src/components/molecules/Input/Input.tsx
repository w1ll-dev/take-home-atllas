import { ComponentVisibility } from "@atoms/ComponentVisibility";
import { BottomSheetTextInputProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput";
import { ColorTokens, Paragraph, YStack } from "tamagui";
import { StyledBottomSheetTextInput } from "./styles";

type InputProps = {
  errorMessage?: string;
} & BottomSheetTextInputProps;

const Input = ({ errorMessage, ...props }: InputProps) => {
  const borderColor: ColorTokens = errorMessage ? "$errorRed" : "$gray5Light";

  return (
    <YStack>
      <StyledBottomSheetTextInput {...props} borderColor={borderColor} />
      <ComponentVisibility isVisible={!!errorMessage}>
        <Paragraph
          color={"$errorRed"}
          fontFamily={"$body"}
          fontSize={"$1"}
          marginVertical={"$2"}>
          {errorMessage}
        </Paragraph>
      </ComponentVisibility>
    </YStack>
  );
};

export { Input };
