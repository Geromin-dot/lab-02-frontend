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
        textAlign: 'center',
        marginTop: 20,
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
    },

    table:{
        marginTop: 20,
        width: '90%',  
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginBottom: 20,
        alignSelf: 'center',
        
    },

    users: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 10,
        marginTop: 10,
    }
})