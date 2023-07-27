import { StyleSheet } from "react-native";
import { components } from "@eva-design/eva/mapping";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  background: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  header: {
    padding: 16,
    alignItems: "center",
  },

  user: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
  },

  img: {
    height: 20,
    width: 20,
  },

  title: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  contentContainer: {
    paddingHorizontal: 16,
  },

  infos: {
    marginTop: 28,
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  form: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 16,
  },

  editNames: {
    flexDirection: "row",
    marginBottom: 16,
    paddingHorizontal: 16,
  },

  editInfos: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },

  other: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },

  names: {
    height: 20,
    borderColor: "gray",
    width: 160,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },

  mdp: {
    height: 20,
    borderColor: "gray",
    width: 160,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },

  input: {
    height: 40,
    borderColor: "gray",
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },

  select: {
    paddingHorizontal: 10,
    height: 20,
    borderColor: "gray",
    width: 160,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "rgb(0, 181, 97)",
    borderRadius: 10,
    border: "none",
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
});



