import { StackHeader, CustomHeaderProps } from "@molecules";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { LandingScreen, RegisterScreen } from "@screens";

const Stack = createNativeStackNavigator();

const screenOptions = ({
  background,
  headerType,
}: CustomHeaderProps): NativeStackNavigationOptions => ({
  presentation: "modal",
  title: "",
  header: ({ navigation }) => (
    <StackHeader
      background={background}
      headerType={headerType}
      navigation={navigation}
    />
  ),
});

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Group
        screenOptions={() =>
          screenOptions({
            background: "$background1",
          })
        }>
        <Stack.Screen name="Landing" component={LandingScreen} />
      </Stack.Group>
      <Stack.Group
        screenOptions={() =>
          screenOptions({
            background: "$background2",
            headerType: "closeModal",
          })
        }>
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { RootStackNavigator };
