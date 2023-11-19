import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { styled } from "tamagui";

const StyledBottomSheetTextInput = styled(BottomSheetTextInput, {
  height: "$6",
  borderWidth: "$1",
  borderRadius: "$4",
  paddingHorizontal: "$5",
  borderColor: "$inputFeedBack",
  fontSize: 20,
  variants: {
    hasError: {
      true: {
        borderColor: "$errorRed",
      },
    },
  },
});

export { StyledBottomSheetTextInput };
