import { Image } from "@atoms";
import { ComponentVisibility } from "@atoms/ComponentVisibility";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useMemo } from "react";
import { TouchableOpacityProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ColorTokens, Stack, XStack } from "tamagui";
import { iconButtonHitSlop } from "./styles";

type CustomHeaderProps = {
  background: ColorTokens;
  headerType?: "closeModal";
};

type StackHeaderProps = CustomHeaderProps &
  Pick<NativeStackHeaderProps, "navigation">;

const StackHeader = ({
  background,
  headerType,
  navigation,
}: StackHeaderProps) => {
  const { top } = useSafeAreaInsets();

  const touchProps: TouchableOpacityProps = useMemo(
    () => ({
      onPress: navigation.goBack,
      hitSlop: iconButtonHitSlop,
    }),
    [navigation.goBack],
  );

  return (
    <XStack height={top} backgroundColor={background}>
      <ComponentVisibility isVisible={headerType === "closeModal"}>
        <Stack padding="$5">
          <Image image="close" touchProps={touchProps} />
        </Stack>
      </ComponentVisibility>
    </XStack>
  );
};

export { CustomHeaderProps, StackHeader };
