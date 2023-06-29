import React, { useState } from "react";
import { styles } from "../SingIn.syle";
import { View, TouchableOpacity, Text, TextInput, ImageBackground } from "react-native";
import { Divider } from "@ui-kitten/components";

export const SignIn = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apiResponse, setApiResponse] = useState<any>(null); // État pour stocker la réponse de l'API
  // Connexion réussie


  const handleLogin = () => {
    // Simulation de réponse de l'API pour la connexion
    const mockApiResponse = [
      {
        status: false,
        message: "Email ou mot de passe incorect",
        errors: {
          email: ["The email has already been taken."],
        },
      },
      {
        status: true,
        message: "Connexion réussi !",
        token: "8|9Gkue3qabi9ekHXoER0alGW0whezRwZCggC44QoP",
      },
    ];

    // Logique de vérification des identifiants
    if (email === "elrisitas@gmail.com" && password === "jedi") {
      // Connexion réussie
      const user = mockApiResponse[1];
      setApiResponse(user); // Stocker la réponse de l'API dans l'état
      navigation.setParams({ isLogged: true }); // Changer le state 'isLogged' dans le composant parent
      const successResponse = mockApiResponse[1];
      setApiResponse(successResponse); // Stocker la réponse de l'API dans l'état
    } else {
      // Connexion échouée
      const errorResponse = mockApiResponse[0];
      setApiResponse(errorResponse); // Stocker la réponse de l'API dans l'état
    }
  };


  
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
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signupButtonText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
