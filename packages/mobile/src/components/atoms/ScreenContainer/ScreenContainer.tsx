import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { useColorScheme, useWindowDimensions } from "react-native";
import { ColorTokens, YStack, YStackProps } from "tamagui";
import { ScrollView } from "./styles";

type ScreenContainerProps = {
  children: ReactNode;
  background: ColorTokens;
} & YStackProps;

const ScreenContainer = ({
  children,
  background,
  ...props
}: ScreenContainerProps) => {
  const { width } = useWindowDimensions();
  const colorScheme = useColorScheme();

  return (
    <ScrollView backgroundColor={background}>
      <YStack {...props} width={width} flex={1} backgroundColor={background}>
        <StatusBar style={colorScheme} />
        {children}
      </YStack>
    </ScrollView>
  );
};

export { ScreenContainer };
