import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { WebView as NativeWebView } from "react-native-webview";

export default function WebView() {
  console.log(
    "EXPO_PUBLIC_WEBAPP_ROOT=%s",
    process.env.EXPO_PUBLIC_WEBAPP_ROOT,
  );
  return (
    <View style={styles.container}>
      <NativeWebView
        source={{ uri: process.env.EXPO_PUBLIC_WEBAPP_ROOT as string }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
