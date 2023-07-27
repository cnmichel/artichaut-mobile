import React,{ useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { SignIn } from "./views/SignIn";
import { SignUp } from "./views/SignUp";
import { Home } from "./views/Home";
import { UserProfile } from "./views/UserProfile";
import { Reservation } from "./views/Reservation";
import SplashScreen from "./components/SplashScreen";
export default function App() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    // Simulate some loading process
    // For this example, let's assume the loading process takes 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(loadingTimer);
  }, []);
  if (!isLoaded) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        {isLogged ? (
          <Tab.Navigator>
            <Tab.Screen
              name="Accueil"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Réservations"
              component={Reservation}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="bed-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Mon Compte"
              component={UserProfile}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Connexion"
              component={SignIn}
              options={{ headerShown: false }}
              initialParams={{
                redirectToHome: (res: boolean) => setIsLogged(res),
              }} // Pass the parameter here
            />
            <Stack.Screen
              name="Inscription"
              component={SignUp}
              options={{ headerShown: false }}
              initialParams={{
                redirectToHome: (res: boolean) => setIsLogged(res),
              }} // Pass the parameter here
            />
          </Stack.Navigator>
        )}
        <StatusBar style="auto" />
      </ApplicationProvider>
    </NavigationContainer>
  );
}

