import { StackHeader } from "@molecules/StackHeader";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { LandingScreen } from "@screens/LandingScreen";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const screenOptions: NativeStackNavigationOptions = {
  presentation: "modal",
  title: "",
  header: StackHeader,
};

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={screenOptions}>
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { RootStackNavigator };
