import { yupResolver } from "@hookform/resolvers/yup";
import { InputFeedback } from "@molecules";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Square, YStack } from "tamagui";
import { StyledTextInput } from "./styles";
import { RegisterTitle } from "@atoms";
import {
  textValidations,
  texts,
  yupRegisterSchema,
} from "./textsAndValidations";
import { useMutation } from "@tanstack/react-query";
import { register } from "@repository";
import { Alert } from "react-native";
import { useNavigationForRootStack } from "@navigation/hooks";
import { registerTestIDs } from "@constants";

const RegisterForm = () => {
  const { navigate } = useNavigationForRootStack();
  const { bottom } = useSafeAreaInsets();

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupRegisterSchema),
  });

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (authToken: string | null) => {
      if (!authToken) {
        Alert.alert(texts.registerError, texts.pleaseTryAgain);
        return;
      }

      reset();
      navigate("Home", {
        authToken,
      });
    },
  });

  const onSubmit = (formData: RegisterFieldValues) => {
    mutation.mutate({
      displayName: `${formData.firstName} ${formData.lastName}`,
      username: formData.username,
      password: formData.password,
    });
  };

  return (
    <KeyboardAwareScrollView>
      <RegisterTitle>{texts.welcome}</RegisterTitle>
      <YStack marginTop="$5">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.firstName}
              errorMessage={errors.firstName?.message}>
              <StyledTextInput
                hasError={!!errors.firstName?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={registerTestIDs.firstNameField}
              />
            </InputFeedback>
          )}
          name="firstName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.lastName}
              errorMessage={errors.lastName?.message}>
              <StyledTextInput
                hasError={!!errors.lastName?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={registerTestIDs.lastNameField}
              />
            </InputFeedback>
          )}
          name="lastName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.username}
              errorMessage={errors.username?.message}>
              <StyledTextInput
                hasError={!!errors.username?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={registerTestIDs.usernameField}
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
              <StyledTextInput
                hasError={!!errors.password?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={registerTestIDs.passwordField}
              />
            </InputFeedback>
          )}
          name="password"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.passwordConfirmation}
              errorMessage={errors.passwordConfirmation?.message}>
              <StyledTextInput
                hasError={!!errors.passwordConfirmation?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                testID={registerTestIDs.passwordConfirmationField}
              />
            </InputFeedback>
          )}
          name="passwordConfirmation"
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
        testID={registerTestIDs.registerButton}
        backgroundColor="$royalBlue">
        {texts.register}
      </Button>
    </KeyboardAwareScrollView>
  );
};

export { RegisterForm };
