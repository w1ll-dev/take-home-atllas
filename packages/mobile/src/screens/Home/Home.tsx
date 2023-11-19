import { ScreenContainer } from "@atoms";
import { StyledWebView } from "./styles";

const Home = () => {
  return (
    <ScreenContainer background="$background2" statusBarStyle="dark">
      <StyledWebView source={{ uri: process.env.EXPO_PUBLIC_WEBAPP_ROOT }} />
    </ScreenContainer>
  );
};

export { Home };
