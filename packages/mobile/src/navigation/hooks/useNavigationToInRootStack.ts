import { NavigationProp, useNavigation } from "@react-navigation/native";

const useNavigationForRootStack = () =>
  useNavigation<NavigationProp<RootStackNavigatorParamList>>();

export { useNavigationForRootStack };
