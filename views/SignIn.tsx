import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    // Si le token est valide (non vide), on effectue la redirection
    if (token) {
      route.params.redirectToHome(true);
    }
  }, [token]);

  const handleContinueAsGuest = () => {
    route.params.redirectToHome(true);
    navigation.navigate("Connexion");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    const user = { email, password };
    try {
      const responseData = await login(user);
      if (responseData.token) {
        setToken(responseData.token);
        setSuccessMessage("Connexion réussie !");
        setErrorMessage("");
        await saveItem("token", responseData.token);
      } else {
        setToken("");
        setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
        setSuccessMessage("");
        // Supprimer le token en cas d'erreur
        await saveItem("token", "");
      }
    } catch (error) {
      console.error(error);
      setToken("");
      if (error.status === 401) {
        setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
      } else {
        setErrorMessage("Une erreur s'est produite lors de la connexion.");
      }
      setSuccessMessage("");
      // Supprimer le token en cas d'erreur
      await saveItem("token", "");
    }
  };



  return (
      <View style={styles.container}>
        <View style={styles.authContent}>
          <View>
            <Text style={styles.title}>
              S'identifier  <Image style={styles.img} source={require('../assets/icon/logo.png')} />
            </Text>
            <Text style={styles.subtitle}>
              Veuillez entrer votre email et mot de passe
            </Text>

            {errorMessage !== "" && (
                <Text style={styles.error}>{errorMessage}</Text>
            )}
            {successMessage !== "" && (
                <Text style={styles.success}>{successMessage}</Text>
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

            <TouchableOpacity onPress={handleContinueAsGuest}>
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

export default SignIn;
