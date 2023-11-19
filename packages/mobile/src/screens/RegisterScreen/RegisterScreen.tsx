import { ScreenContainer } from "@atoms/ScreenContainer";
import { RegisterForm } from "@organisms/Forms";

const RegisterScreen = () => {
  return (
    <ScreenContainer
      padding="$5"
      background="$background2"
      statusBarStyle="dark">
      <RegisterForm />
    </ScreenContainer>
  );
};

export { RegisterScreen };
