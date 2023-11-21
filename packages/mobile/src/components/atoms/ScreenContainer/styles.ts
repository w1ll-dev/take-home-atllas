import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { styled } from "tamagui";

export const ScrollView = styled(KeyboardAwareScrollView, {
  contentContainerStyle: {
    flexGrow: 1,
  },
});
