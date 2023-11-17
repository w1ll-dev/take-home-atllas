import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { YStack } from "tamagui";
import { ScrollView } from "./styles";

type ScreenContainerProps = {
  children: ReactNode;
};

const ScreenContainer = ({ children }: ScreenContainerProps) => {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <ScrollView backgroundColor={"$background"}>
      <YStack width={width} flex={1} backgroundColor={"$background"}>
        <StatusBar style={colorScheme} />
        {children}
      </YStack>
    </ScrollView>
  );
};

export { ScreenContainer };
