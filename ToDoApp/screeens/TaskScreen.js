import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { getTasks } from '../services/api';



const TaskScreen = ({ route, navigation }) => {
    const { token } = route.params;
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await getTasks(token);
                setTasks(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTasks();
    }, [token]);
    const renderItem = ({ item }) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
    );
    return (
        <View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
            <Button title="Adicionar Tarefa" onPress={() =>
                navigation.navigate('AddTask', { token })} />
        </View>
    );
};
export default TaskScreen;