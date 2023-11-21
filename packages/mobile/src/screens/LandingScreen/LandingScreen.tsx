import { Image } from "@atoms/Image";
import { ScreenContainer } from "@atoms/ScreenContainer";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useBottomSheetWithControls } from "@hooks";
import { useNavigationForRootStack } from "@navigation/hooks";
import { LoginForm } from "@organisms/Forms";
import { useCallback } from "react";
import { Button, H1, Paragraph, YStack } from "tamagui";
import { texts } from "./texts";
import { useFadeInOut } from "@hooks/animations";
import { MotiView } from "moti";

const LandingScreen = () => {
  const { sheetRef, handleOnClose, handleOpenBottomSheet } =
    useBottomSheetWithControls();
  const { navigate } = useNavigationForRootStack();

  const { animate, from, transition } = useFadeInOut({
    endOpacity: 1,
    startY: -10,
  });

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    [],
  );

  const handleRegisterPress = () => {
    navigate("Register");
  };

  return (
    <>
      <ScreenContainer background="$background1" statusBarStyle="light">
        <MotiView from={from} animate={animate} transition={transition}>
          <YStack marginTop="$10" marginBottom="$5" alignItems="center">
            <Image image="darkLogo" />
          </YStack>
          <YStack paddingHorizontal="$5" space="$10" paddingTop="$10">
            <H1 color="$text1" fontFamily="$heading" fontSize="$1">
              {texts.atllasOffersModern}
            </H1>
            <Paragraph color="$text1" textAlign="right" fontSize="$3">
              {texts.meetTheNewStandard}
            </Paragraph>
          </YStack>
        </MotiView>
        <YStack flex={1} />
        <MotiView from={from} animate={animate} transition={transition}>
          <YStack paddingHorizontal="$5" paddingVertical="$10" space="$4">
            <Button
              height="$6"
              color="$text1"
              size="$2"
              borderColor="$royalBlue"
              borderWidth="$1"
              onPress={handleOpenBottomSheet}>
              {texts.login}
            </Button>
            <Button
              height="$6"
              color="$text1"
              size="$2"
              backgroundColor="$royalBlue"
              onPress={handleRegisterPress}>
              {texts.register}
            </Button>
          </YStack>
        </MotiView>
      </ScreenContainer>
      <BottomSheet
        ref={sheetRef}
        onClose={handleOnClose}
        index={-1}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        snapPoints={["60%"]}>
        <LoginForm />
      </BottomSheet>
    </>
  );
};

export { LandingScreen };
