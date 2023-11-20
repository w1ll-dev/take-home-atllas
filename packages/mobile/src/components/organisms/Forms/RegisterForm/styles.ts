import { TextInput } from "react-native";
import { styled } from "tamagui";

const StyledTextInput = styled(TextInput, {
  autoCapitalize: "none",
  height: "$6",
  borderColor: "$inputFeedBack",
  borderWidth: "$1",
  borderRadius: "$4",
  paddingHorizontal: "$5",
  fontSize: 20,
  variants: {
    hasError: {
      true: {
        borderColor: "$errorRed",
      },
    },
  },
});

export { StyledTextInput };
