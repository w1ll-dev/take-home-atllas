import { FontAwesome } from "@expo/vector-icons";
import { fonts } from "@styles/themes";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
/**
 *
 * Load any resources or data that we need prior to rendering the app
 */
const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          [fonts.extraLight]: require("@tamagui/font-inter/otf/Inter-ExtraLight.otf"),
          [fonts.regular]: require("@tamagui/font-inter/otf/Inter-Regular.otf"),
          [fonts.semiBold]: require("@tamagui/font-inter/otf/Inter-SemiBold.otf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
};

export { useCachedResources };
