import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorTokens, Stack, YStack, YStackProps } from "tamagui";
import { ScrollView } from "./styles";

type ScreenContainerProps = {
  children: ReactNode;
  background: ColorTokens;
  statusBarStyle: "light" | "dark";
} & YStackProps;

const ScreenContainer = ({
  children,
  background,
  statusBarStyle = "dark",
  ...props
}: ScreenContainerProps) => {
  const { bottom } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  return (
    <>
      <ScrollView backgroundColor={background}>
        <YStack {...props} width={width} flex={1} backgroundColor={background}>
          <StatusBar style={statusBarStyle} />
          {children}
        </YStack>
      </ScrollView>
      <Stack height={bottom} backgroundColor={background} />
    </>
  );
};

export { ScreenContainer };
