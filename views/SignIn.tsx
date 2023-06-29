import React, { useState } from "react";
import { styles } from "../SingIn.syle";
import { View, TouchableOpacity, Text, TextInput, ImageBackground } from "react-native";
import { Divider } from "@ui-kitten/components";
import Auth  from "../services/Auth";
import Store from "../services/Store";

export const SignIn = ({ navigation }: { navigation: any }) => {
  const {saveItem, getItem} = Store()
  const {login} = Auth() // Importation de la fonction login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState<any>(null); // État pour stocker la réponse de l'API
  // Connexion réussie


  const handleLogin = () => {
  const user = {email, password} // prend en objet email et password
  login(user).then((responseData)=>{ // Récupération des informations 
    console.log(responseData)
  })

  }
  
  return (
    <View style={styles.container}>
      <View style={styles.authContent}>
        <View>
          <Text style={styles.title}>S'identifier</Text>
          <Text style={styles.subtitle}>
            Veuillez entrer votre email et mot de passe
          </Text>
      
                {apiResponse && !apiResponse.status && (
                  <Text style={styles.error}>{apiResponse.message}</Text>
                  )}
                  {apiResponse && apiResponse.status && (
                   <Text style={styles.success}>{apiResponse.message}</Text>
                   )}
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="elrisitas@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="************"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Mot de passe oublié</Text>
          </TouchableOpacity>
          <Divider style={styles.divider} />

          <TouchableOpacity
            onPress={() => navigation.setParams({ isLogged: true })}
          >
            <Text style={styles.link}>Continuer en tant qu'invité →</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Inscription")}
          >
            <Text style={styles.signupButtonText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
