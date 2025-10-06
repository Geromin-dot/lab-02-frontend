import { View, Text, Button } from "react-native";
import styles from "../style";

export default function ReviewPage({ route, navigation }) {
    const { formData } = route.params;

    const handleSubmit = () => {
        navigation.navigate('Success');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review Your Information</Text>
            <Text style={styles.text}>First Name: {formData.first_name}</Text>
            <Text style={styles.text}>Last Name: {formData.last_name}</Text>
            <Text style={styles.text}>Email: {formData.email}</Text>
            <Text style={styles.text}>Gender: {formData.gender}</Text>
            <Text style={styles.text}>Password: {formData.password}</Text>

            <Button style={styles.button}
            title="Review and Submit" 
            onPress={() => navigation.navigate('Home')}/>
        </View>
    );
}