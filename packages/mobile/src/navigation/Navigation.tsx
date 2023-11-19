import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { RootStackNavigator } from "./RootStackNavigator/RootStackNavigator";
import { useColorScheme } from "@hooks";

const Navigation = () => {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export { Navigation };
