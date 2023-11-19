import { ScreenContainer } from "@atoms/ScreenContainer";
import { RegisterForm } from "@organisms/Forms";

const RegisterScreen = () => {
  return (
    <ScreenContainer paddingHorizontal="$5" background="$background2">
      <RegisterForm />
    </ScreenContainer>
  );
};

export { RegisterScreen };
