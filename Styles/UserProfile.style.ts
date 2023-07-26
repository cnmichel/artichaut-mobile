import { StyleSheet } from "react-native";
import {components} from "@eva-design/eva/mapping";
import height = components.Avatar.meta.parameters.height;
export const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 16,
        height: "100%"
    },
    
    Background: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        alignItems: "center",
        borderRadius: 10,
        
    },
    
    header: {
        borderRadius: 10,
        padding: 3,
        flex: 1 ,
        flexDirection: "column",
    },
    
    user: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    img: {
        height:20,
        width:20,
    },
    
    title: {
        marginTop: 20,
        textAlign: 'left',
        fontSize: 30,
        fontWeight: "bold",
        marginBottom:10,

    },
    
    infos: {
        marginTop: 28,
        textAlign: 'left',
        fontSize: 20,
        fontWeight: "bold",
        marginBottom:10,

    },
    
    form: {
        width: '90%',
        flex: 1 ,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 100,
    },
    
    editNames: {
        flex: 1 ,
        flexDirection: "row",
    },
    
    editInfos: {
        flex: 1 ,
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
    },
    
    other: {
        flex: 1 ,
        flexDirection: "column",
    },
    
    names: {
        height: 40,
        borderColor: "gray",
        width: 200,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },
    
    input: {
        height: 40,
        borderColor: "gray",
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: "white",
        marginBottom:10,
    },
    
    select: {
        paddingHorizontal: 10,
        width: 200,
    },
    
    button: {
        backgroundColor: "#00B561",
        borderRadius: 10,
        padding: 15,
        width: 280,
        marginTop: 10,
        marginBottom:10,
    },
    
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    
});



