import { StackHeader, CustomHeaderProps } from "@molecules";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Home, LandingScreen, RegisterScreen } from "@screens";
import { RootStackNavigatorParamList } from "src/types/navigation";

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const screenOptions = ({
  background,
  headerType,
}: CustomHeaderProps): NativeStackNavigationOptions => ({
  presentation: "fullScreenModal",
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
      <Stack.Group
        screenOptions={() =>
          screenOptions({
            background: "$background2",
          })
        }>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export { RootStackNavigator };
