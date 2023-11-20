import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackNavigatorParamList } from "src/types/navigation";

const useNavigationForRootStack = () =>
  useNavigation<NavigationProp<RootStackNavigatorParamList>>();

export { useNavigationForRootStack };
