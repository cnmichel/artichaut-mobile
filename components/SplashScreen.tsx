import React, { useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";

const SplashScreen = () => {
  useEffect(() => {
    // Simulate some loading process, for example fetching data or any other setup
    // After the loading process is completed, you can navigate to the main screen
    // For this example, let's assume the loading process takes 2 seconds
    const loadingTimer = setTimeout(() => {
      // Replace 'Main' with the screen name you want to navigate after the splash screen
      // For example: navigation.navigate('Main');
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/icon/logo.png")} style={styles.logo} />
      <ActivityIndicator size="large" color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default SplashScreen;
