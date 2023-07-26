import { StyleSheet } from "react-native";
import {components} from "@eva-design/eva/mapping";
import height = components.Avatar.meta.parameters.height;
export const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 10,
        width: "100%" ,
        height: "100%"
    },
    header: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 3,
        flex: 1 ,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    img: {
        height:66,
        width:164,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    form: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
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
    select: {
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: "#00B561",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        width: 280,
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});



