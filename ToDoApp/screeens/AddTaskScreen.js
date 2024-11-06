import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addTask } from '../services/api';

const AddTaskScreen = ({ route, navigation }) => {
    const { token } = route.params;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    const handleAddTask = async () => {
        try {
            await addTask({ title, description }, token);
            alert("Tentou")
            navigation.goBack();
        } catch (error) {
            console.error(error);
            Alert.alert("Erro", error.response?.data?.message || "Não foi possível adicionar a tarefa");
        }
    };



    return (
        <View>
            <TextInput placeholder="Título" value={title}
                onChangeText={setTitle} />
            <TextInput placeholder="Descrição" value={description}
                onChangeText={setDescription} />
            <Button title="Salvar Tarefa" onPress={handleAddTask} />
        </View>
    );
};

export default AddTaskScreen;