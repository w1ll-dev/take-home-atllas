import { gestureHandlerRootViewStyles } from "@providers/styles";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react-native";
import { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
import BottomSheet from "@gorhom/bottom-sheet";

const queryClient = new QueryClient();

type MockAppProviderProps = {
  children: ReactNode;
};

const withBottomSheetHOC = (children: ReactNode) => (
  <BottomSheet snapPoints={["50%"]} index={0}>
    {children}
  </BottomSheet>
);

const MockAppProvider = ({ children }: MockAppProviderProps) => {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={gestureHandlerRootViewStyles.container}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>{children}</NavigationContainer>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

const customRender = (children: ReactNode) => {
  return render(<MockAppProvider>{children}</MockAppProvider>);
};

export { customRender, withBottomSheetHOC };
