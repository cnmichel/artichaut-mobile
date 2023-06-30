import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 60,
    },
    img: {
        height:50,
        width:50,
        alignItems: "center"
    },
    title: {
        marginTop:100,
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "left",
    },
    subtitle: {
        marginLeft: 10,
        fontSize: 16,
        marginBottom: 60,
        paddingRight: 40,
        color: "#888",
        textAlign: "left",
    },
    form: {
        flex:1,
        alignItems: "center" ,
        width: "100%",
    },
    input: {
        height: 40,
        borderColor: "gray",
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    button: {
        backgroundColor: "#00B561",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        width: 280,
        marginTop: 20,
    }
});