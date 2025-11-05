import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import styles from '../style';
import axios from 'axios';


export default function EditUserPage({ route, navigation }) {

    const { user } = route.params;

    const [first_name, setFirstName] = useState(user.first_name);
    const [last_name, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [gender, setGender] = useState(user.gender);


    const handleUpdate = () => {
        if (!first_name || !last_name || !email || !gender) {
            alert("Error", "Please fill in all fields.");
            return;
        }

        axios
            .put(`http://192.168.30.108:8080/registration/api/users/${user.id}/`, {
                first_name: first_name,
                last_name: last_name,
                email: email,
                gender: gender,
            })
            .then(() => {
                Alert.alert("Success", "User updated successfully.");
                navigation.goBack();
            })
            .catch((error) => {
                console.error(error);
                Alert.alert("Error", "Failed to update user.");
            });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Edit User Page</Text>
            
            <TextInput style={styles.textInput}
                value={first_name}
                onChangeText={setFirstName}
            />
            <TextInput style={styles.textInput}
                value={last_name}
                onChangeText={setLastName}
            />
            <TextInput style={styles.textInput}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={styles.textInput}
                value={gender}
                onChangeText={setGender}
            />


            <Button
                title="Save Changes"
                onPress={handleUpdate}
            />
        </View>
    )
}