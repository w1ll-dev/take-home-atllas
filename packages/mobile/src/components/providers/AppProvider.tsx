import { TamaguiProvider } from "tamagui";

import { useCachedResources } from "@hooks";
import config from "../../../tamagui.config";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { gestureHandlerRootViewStyles } from "./styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const AppProvider = ({ children }: AppProviderProps) => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={gestureHandlerRootViewStyles.container}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

export { AppProvider };
