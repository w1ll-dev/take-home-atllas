import { ScrollView as TamaguiScrollView, styled } from "tamagui";

export const ScrollView = styled(TamaguiScrollView, {
  name: "TamaguiScrollView", // useful for debugging, and Component themes
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: "$background1",
  },
});
