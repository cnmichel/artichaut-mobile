import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Divider } from "@ui-kitten/components";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Votre logique de connexion ici
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.authContent}>
        <View>
          <Text style={styles.title}>S'identifier</Text>
          <Text style={styles.subtitle}>
            Veuillez entrer votre email et mot de passe
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="elrisita@gmail.com"
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

          <TouchableOpacity>
            <Text style={styles.link}>Continuer en tant qu'invité →</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "red",
  },
  authContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 60,
    paddingRight: 60,
    color: "#888",
    textAlign: "left",
  },
  form: {
    marginBottom: 20,
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  forgotPassword: {
    marginVertical: 20,
    textDecorationLine: "underline",
    color: "#00B561",
    fontSize: 16,
    textAlign: "left",
    marginTop: 10,
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: "#00B561",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: 208,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  divider: {
    marginVertical: 20,
    backgroundColor: "gray",
    marginBottom: 40,
  },
  link: {
    color: "#00B561",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 16,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00B561",
    padding: 10,
    width: "60%",
    marginBottom: 10,
  },
  signupButtonText: {
    color: "#00B561",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});

export default Connexion;
