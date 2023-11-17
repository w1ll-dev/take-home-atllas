// this provides some helpful reset styles to ensure a more consistent look
// only import this from your web app, not native
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";

import { useCachedResources } from "@hooks/useCachedResources";
import config from "../../../tamagui.config";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { gestureHandlerRootViewStyles } from "./styles";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={gestureHandlerRootViewStyles.container}>
          {children}
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export { AppProvider };
