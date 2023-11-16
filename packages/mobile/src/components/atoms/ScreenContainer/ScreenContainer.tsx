import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { YStack } from "tamagui";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <YStack width={width} flex={1} backgroundColor={"$background"}>
      <StatusBar style={colorScheme} />
      {children}
    </YStack>
  );
};

export { ScreenContainer };
