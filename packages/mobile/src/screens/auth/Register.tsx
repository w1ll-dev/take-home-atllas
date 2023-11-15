import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
