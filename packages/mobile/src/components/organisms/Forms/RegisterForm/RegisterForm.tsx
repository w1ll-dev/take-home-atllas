import { yupResolver } from "@hookform/resolvers/yup";
import { InputFeedback } from "@molecules";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Square, YStack } from "tamagui";
import { StyledTextInput } from "./styles";
import {
  textValidations,
  texts,
  yupRegisterSchema,
} from "./textsAndValidations";
import { RegisterTitle } from "@atoms";

const RegisterForm = () => {
  const { bottom } = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupRegisterSchema),
  });

  const onSubmit = (data: RegisterFieldValues) =>
    console.log("🚀 ~ RegisterForm ~ data:", data);

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
              />
            </InputFeedback>
          )}
          name="lastName"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputFeedback
              placeholder={textValidations.placeholders.email}
              errorMessage={errors.email?.message}>
              <StyledTextInput
                hasError={!!errors.email?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            </InputFeedback>
          )}
          name="email"
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
              />
            </InputFeedback>
          )}
          name="passwordConfirmation"
        />
      </YStack>
      <Square height="$5" />
      <Button
        height="$6"
        color="$text1"
        size="$2"
        bottom={bottom}
        onPress={handleSubmit(onSubmit)}
        backgroundColor="$royalBlue">
        {texts.register}
      </Button>
    </KeyboardAwareScrollView>
  );
};

export { RegisterForm };
