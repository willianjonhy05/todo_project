import axios from 'axios';
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',

});
export default api;



export const login = (username, password) => {
    return api.post('/token/', { username, password });
};

export const getTasks = (token) => {
    return api.get('/tasks/', {
        headers: { Authorization: `Bearer ${token}` }
    });
};


export const addTask = (token, taskData)  => {
    return api.post('/tasks/', taskData, {
        headers: {Authorization: `Bearer ${token}` },
    })
};


export const updateTask = (token, taskId, updateData)  => {
    return api.put(`/tasks/${taskId}/`, updateData, {
        headers: {Authorization: `Bearer ${token}` },
    })
};


export const deleteTask = (token, taskId)  => {
    return api.delete(`/tasks/${taskId}/`, {
        headers: {Authorization: `Bearer ${token}` },
    })
};

