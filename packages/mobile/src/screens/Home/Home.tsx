import { ScreenContainer } from "@atoms";
import { useMemo } from "react";
import { RootStackReactNavigationProps } from "src/types/navigation";
import { StyledWebView } from "./styles";
import { getWebViewSource } from "./utils";
import { Alert } from "react-native";
import { texts } from "./texts";
import { useNavigationForRootStack } from "@navigation/hooks";

const Home = ({ route }: RootStackReactNavigationProps<"Home">) => {
  const { navigate } = useNavigationForRootStack();

  const source = useMemo(
    () => getWebViewSource(route.params?.authToken),
    [route.params?.authToken],
  );

  if (!source.uri) {
    Alert.alert(texts.oops, texts.weHaveAnErrorr, [
      {
        onPress: () => navigate("Landing"),
      },
    ]);

    return null;
  }

  return (
    <ScreenContainer background="$background2" statusBarStyle="dark">
      <StyledWebView
        source={{
          uri: source.uri,
          headers: source.headers,
        }}
      />
    </ScreenContainer>
  );
};

export { Home };
