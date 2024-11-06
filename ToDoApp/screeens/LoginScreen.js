import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { login } from '../services/api';


const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            const token = response.data.access;
            navigation.navigate('Tasks', { token });
        } catch (error) {
            Alert.alert("Erro", "Credenciais inválidas");
        }
    };
    return (
        <View>
            <TextInput placeholder="Usuário" value={username}
                onChangeText={setUsername} />
            <TextInput placeholder="Senha" value={password}
                onChangeText={setPassword} secureTextEntry />
            <Button title="Entrar" onPress={handleLogin} />
        </View>
    );
};
export default LoginScreen;
