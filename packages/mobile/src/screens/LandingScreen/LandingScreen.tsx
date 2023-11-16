import { Image } from "@atoms/Image";
import { ScreenContainer } from "@atoms/ScreenContainer";
import { Button, H1, Paragraph, YStack } from "tamagui";
import { texts } from "./texts";

const LandingScreen = () => {
  return (
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
          size={"$3"}
          borderColor={"$royalBlue"}
          borderWidth={"$1"}>
          {texts.login}
        </Button>
        <Button
          height={"$6"}
          color={"$text"}
          size={"$3"}
          backgroundColor={"$royalBlue"}>
          {texts.register}
        </Button>
      </YStack>
    </ScreenContainer>
  );
};

export { LandingScreen };
