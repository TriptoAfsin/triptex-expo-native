import { StatusBar } from "expo-status-bar";
import DummyComponents from "pages/DummyComponents";
import { StyleSheet, View, useColorScheme } from "react-native";
import { ScrollView } from "tamagui";

export default function App() {
  let colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "dark" ? "#23272e" : "#ffff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={styles.container}>
      {/* <ToastViewport /> */}
      <ScrollView>
        <DummyComponents />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
