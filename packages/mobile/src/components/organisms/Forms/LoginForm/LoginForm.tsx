import { RegisterTitle } from "@atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputFeedback } from "@molecules";
import { Controller, useForm } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button, Square, YStack } from "tamagui";
import { StyledBottomSheetTextInput } from "./styles";
import { textValidations, texts, yupLoginSchema } from "./textsAndValidations";
import { login } from "@repository";
import { useMutation } from "@tanstack/react-query";

const LoginForm = () => {
  const { bottom } = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFieldValues>({
    mode: "onChange",
    resolver: yupResolver(yupLoginSchema),
  });

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log("🎉🎉🎉LOGIN SUCCESS🎉🎉🎉");
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
      <RegisterTitle>{texts.login}</RegisterTitle>
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
              />
            </InputFeedback>
          )}
          name="password"
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
        {texts.login}
      </Button>
    </YStack>
  );
};

export { LoginForm };
