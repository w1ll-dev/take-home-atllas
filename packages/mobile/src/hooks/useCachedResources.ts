import { FontAwesome } from "@expo/vector-icons";
import { fonts } from "@styles/fonts";
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
          [fonts.InterExtraLight]: require("@assets/fonts/files/Inter-ExtraLight.otf"),
          [fonts.InterRegular]: require("@assets/fonts/files/Inter-Regular.otf"),
          [fonts.InterSemiBold]: require("@assets/fonts/files/Inter-SemiBold.otf"),
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
