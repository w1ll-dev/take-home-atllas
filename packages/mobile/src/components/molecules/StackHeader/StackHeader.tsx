import { useSafeAreaInsets } from "react-native-safe-area-context";
import { YStack } from "tamagui";

const StackHeader = () => {
  const { top } = useSafeAreaInsets();

  return <YStack height={top} backgroundColor={"$background"} />;
};

export { StackHeader };
