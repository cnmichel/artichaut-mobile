import React, { useState } from "react";
import { styles } from "../SignIn.syle";
import { View, TouchableOpacity, Text, TextInput, Image } from "react-native";
import { Divider } from "@ui-kitten/components";
import Auth from "../services/Auth";
import Store from "../services/Store";

export const SignIn = ({ navigation, route }: { navigation: any }) => {
  const { saveItem, getItem } = Store();
  const { login } = Auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const handleContinueAsGuest = () => {
    route.params.redirectToHome(true);
    navigation.navigate("Connexion");
  };
  

  const handleLogin = async () => {
    const user = { email, password };
    try {
      const responseData = await login(user);

      setToken(responseData.token); // Mise à jour de l'état du token
      setSuccessMessage("Connexion réussie !"); // Mise à jour du message de succès
      setErrorMessage(""); // Réinitialisation du message d'erreur
      await saveItem("token", responseData.token); // Sauvegarde du token de l'API dans le Store
      route.params.redirectToHome(true);
    } catch (error) {
      console.error(error);
      setToken(""); // Réinitialisation du token en cas d'erreur
      setErrorMessage("Une erreur s'est produite lors de la connexion.");
      setSuccessMessage(""); // Réinitialisation du message de succès
    }
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.authContent}>
        <View>
          <Text style={styles.title}>S'identifier  <Image style={styles.img} source={require('../assets/icon/logo.png')}/></Text>
          <Text style={styles.subtitle}>Veuillez entrer votre email et mot de passe</Text>

          {errorMessage !== "" && <Text style={styles.error}>{errorMessage}</Text>}
          {successMessage !== "" && <Text style={styles.success}>{successMessage}</Text>}
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

          <TouchableOpacity onPress={handleContinueAsGuest} >
            <Text style={styles.link}>Continuer en tant qu'invité →</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Inscription")}>

            <Text style={styles.signupButtonText}>S'inscrire</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
