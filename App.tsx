import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ApplicationProvider } from "@ui-kitten/components";
import Connexion from "./views/connexion";
import * as eva from "@eva-design/eva";

export default function App() {
  return (
    <View style={styles.container}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Connexion />
        <StatusBar style="auto" />
      </ApplicationProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
