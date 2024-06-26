import { yupResolver } from "@hookform/resolvers/yup";
import { InputFeedback } from "@molecules";
import { useNavigationForRootStack } from "@navigation/hooks";
import { login } from "@repository";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Square, YStack } from "tamagui";
import { StyledBottomSheetTextInput } from "./styles";
import { textValidations, texts, yupLoginSchema } from "./textsAndValidations";
import { loginTestIDs } from "@constants";

const LoginForm = () => {
  const { navigate } = useNavigationForRootStack();
  const { bottom } = useSafeAreaInsets();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupLoginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: data => {
      if (!data) {
        Alert.alert(texts.invalidCredentials, texts.pleaseTryAgain);
        return;
      }

      reset();
      navigate("Home", {
        authToken: data,
      });
    },
  });

  const onSubmit = async (formData: LoginFieldValues) => {
    mutation.mutate({
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <YStack padding="$5" justifyContent="space-between" flex={1}>
      <YStack>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.username}
              errorMessage={errors.username?.message}>
              <StyledBottomSheetTextInput
                hasError={!!errors.username?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={loginTestIDs.usernameField}
              />
            </InputFeedback>
          )}
          name="username"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.password}
              errorMessage={errors.password?.message}>
              <StyledBottomSheetTextInput
                hasError={!!errors.password?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                secureTextEntry
                testID={loginTestIDs.passwordField}
              />
            </InputFeedback>
          )}
          name="password"
        />
      </YStack>
      <Square height="$5" />
      <Button
        disabled={mutation.isPending}
        height="$6"
        color="$text1"
        size="$2"
        bottom={bottom}
        onPress={handleSubmit(onSubmit)}
        testID={loginTestIDs.loginButton}
        backgroundColor="$royalBlue">
        {texts.login}
      </Button>
    </YStack>
  );
};

export { LoginForm };
