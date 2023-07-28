import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: 'center',
    },
    title: {
        marginTop:100,
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "left",
    },
    divider: {
        marginVertical: 20,
        backgroundColor: "gray",
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 60,
        paddingRight: 60,
        color: "#888",
        textAlign: "left",
        marginLeft: 50,
    },
    form: {
        flex:1,
        alignItems: "center" ,
        width: "100%",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        width: 300,
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: '#00B561',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        width: 280,
        marginTop: 20,
    },

    returnButton: {
        backgroundColor: "rgb(248 248 248);",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#00B561",
        padding: 10,
        width: 300,
        marginBottom: 10,
    },
   returnButtonText: {
        color: "#00B561",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});