import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "tamagui";

const StackHeader = () => {
  const { top } = useSafeAreaInsets();

  return <View height={top} />;
};

export { StackHeader };
