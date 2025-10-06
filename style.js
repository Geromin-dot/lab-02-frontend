import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgtoundColor: '#bbbbbb',
    },

    title:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 40,
    },

    buttonContainer:{
        marginVertical: 10,
        fontWeight: 'bold',
        marginBottom: 40,
    },

    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        width: '50%',
        paddingHorizontal: 10,
        borderRadius: 5,
    },

    text:{
        fontSize: 16,
        marginBottom: 10, 
        fontWeight: 'bold',
        marginTop: 10, 
    }
})