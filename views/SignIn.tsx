import React, { useState } from "react";
import { styles } from "../SingIn.syle";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Divider } from "@ui-kitten/components";

export const SignIn = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //  logique de SignIn ici
    console.log("Email:", email);
    console.log("Mot de passe:", password);

    // Changer le state 'isLogged' dans le parent en appelant la fonction setIsLogged
    navigation.setParams({ isLogged: true }); // Appeler setIsLogged avec la valeur true
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
