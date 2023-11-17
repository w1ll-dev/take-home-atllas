import { Input } from "@molecules/Input";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, YStack } from "tamagui";
import { texts } from "./texts";

const LoginForm = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <YStack
      paddingHorizontal={"$5"}
      paddingTop={"$5"}
      justifyContent="space-between"
      flex={1}>
      <YStack space={"$8"}>
        <Input placeholder={texts.email} errorMessage={texts.emailError} />
        <Input placeholder={texts.password} />
      </YStack>
      <Button
        height={"$6"}
        color={"$text"}
        size={"$2"}
        bottom={bottom}
        backgroundColor={"$royalBlue"}>
        {texts.login}
      </Button>
    </YStack>
  );
};

export { LoginForm };
