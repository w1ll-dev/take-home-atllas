import { ScreenContainer } from "@atoms";
import { useMemo } from "react";
import { RootStackReactNavigationProps } from "src/types/navigation";
import { StyledWebView } from "./styles";
import { getWebViewSource } from "./utils";

const Home = ({ route }: RootStackReactNavigationProps<"Home">) => {
  const source = useMemo(
    () => getWebViewSource(route.params?.authToken),
    [route.params.authToken],
  );

  return (
    <ScreenContainer background="$background2" statusBarStyle="dark">
      <StyledWebView source={source} />
    </ScreenContainer>
  );
};

export { Home };
