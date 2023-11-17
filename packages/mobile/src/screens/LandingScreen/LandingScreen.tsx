import { Image } from "@atoms/Image";
import { ScreenContainer } from "@atoms/ScreenContainer";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { useBottomSheetWithControls } from "@hooks/useBottomSheetWithControls";
import { LoginForm } from "@organisms/LoginForm";
import { useCallback } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Button, H1, Paragraph, YStack } from "tamagui";
import { texts } from "./texts";

const bottomSheetSnapPoints = ["50%"];

const LandingScreen = () => {
  const { sheetRef, handleOnClose } = useBottomSheetWithControls();

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

  return (
    <>
      <ScreenContainer>
        <YStack marginTop={"$10"} marginBottom={"$5"} alignItems="center">
          <Image image="darkLogo" />
        </YStack>
        <YStack paddingHorizontal={"$5"} space={"$10"} paddingTop={"$10"}>
          <H1 color={"$text"} fontFamily={"$heading"} fontSize={"$1"}>
            {texts.atllasOffersModern}
          </H1>
          <Paragraph color={"$text"} textAlign="right" fontSize={"$3"}>
            {texts.meetTheNewStandard}
          </Paragraph>
        </YStack>
        <YStack flex={1} />
        <YStack paddingHorizontal={"$5"} paddingVertical={"$10"} space={"$4"}>
          <Button
            height={"$6"}
            color={"$text"}
            size={"$2"}
            borderColor={"$royalBlue"}
            borderWidth={"$1"}
            onPress={() => sheetRef.current.expand()}>
            {texts.login}
          </Button>
          <Button
            height={"$6"}
            color={"$text"}
            size={"$2"}
            backgroundColor={"$royalBlue"}>
            {texts.register}
          </Button>
        </YStack>
      </ScreenContainer>
      <BottomSheet
        ref={sheetRef}
        onClose={handleOnClose}
        index={-1}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        snapPoints={bottomSheetSnapPoints}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
          <LoginForm />
        </KeyboardAvoidingView>
      </BottomSheet>
    </>
  );
};

export { LandingScreen };
