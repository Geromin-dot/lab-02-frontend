import { View, Text, Button, ActivityIndicator, FlatList, Alert } from 'react-native';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '../style';

export default function UserListPage() {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const BASE_URL = 'http://192.168.30.108:8000/registration/api/users/';

    const fetchUsers = () => {
        setLoading(true);
        axios
            .get(BASE_URL)
            .then((res) => {
                setUsers(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }

    React.useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this user?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                        axios
                            .delete(`http://192.168.30.108:8000/registration/api/users/${id}/`)
                            .then(() => {
                                Alert.alert("Success", "User deleted successfully");
                            })
                            .catch((err) => {
                                console.error(err);
                                Alert.alert("Error", "Failed to delete user");
                            });
                    },
                },
            ]
        );
    };

    if (loading) {
        return (
            <View>
                <ActivityIndicator screenReaderFocusable={true} size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={styles.title}>View All Users</Text>
            <FlatList style={styles.table}
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.users}>
                        <Text>{item.last_name} {item.first_name}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.gender}</Text>
                        <Button
                            title="Edit"
                            color={"#2fb846ff"}
                        />
                        <Button
                            title="Delete"
                            color={"#ff3b3bff"}
                            onPress={() => handleDelete(item.id)}
                        />
                    </View>
                )}
            />
        </View>
    );
}