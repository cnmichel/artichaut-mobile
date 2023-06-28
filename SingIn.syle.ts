import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
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
  error: {
    color: "red", // Ajout de la propriété 'error' pour le style de texte d'erreur
    marginBottom: 16,
    textAlign: "center",
  },
});
