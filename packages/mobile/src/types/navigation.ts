import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackNavigatorParamList = {
  Landing: undefined;
  Home: {
    authToken: string;
  };
  Register: undefined;
};

type RootStackNavigatorRouteName = keyof RootStackNavigatorParamList;

type RootStackReactNavigationProps<S extends RootStackNavigatorRouteName> =
  NativeStackScreenProps<RootStackNavigatorParamList, S>;

export { RootStackReactNavigationProps, RootStackNavigatorParamList };
