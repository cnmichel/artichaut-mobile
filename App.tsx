import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
// import { SignIn } from './views/SignIn';
import { SignUp } from './views/SignUp';
import { Home } from './views/Home';
import { UserProfile } from './views/UserProfile';
import { Reservation } from './views/Reservation';
import React from 'react';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const [isLogged, setIsLogged] = useState<boolean>(false)
   // const [token] = useState("")

  return (

      //<SignUp />
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        { isLogged ?
          <Tab.Navigator>

            <Tab.Screen name="Accueil"
                        component={Home}
                        options={{ tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home-outline" size={size} color={color}/>) }}/>
            <Tab.Screen name="Réservations"
                        component={Reservation}
                        options={{ tabBarIcon: ({ color, size }) => (
                            <Ionicons name="bed-outline" size={size} color={color}/>) }}/>
            <Tab.Screen name="Mon Compte"
                        component={UserProfile}
                        options={{ tabBarIcon: ({ color, size })=> (
                            <Ionicons name="person-outline" size={size} color={color}/>) }}/>
          </Tab.Navigator>
          :
          <Stack.Navigator>
            {/* <Stack.Screen name="Connexion" component={SignIn} options={{ headerShown: false }}/>*/
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} initialParams={{ redirectToHome: (res:boolean) => setIsLogged(res) }}/> }
          </Stack.Navigator>
        }
        <StatusBar style="auto" />
      </ApplicationProvider>
    </NavigationContainer>
  );
}
