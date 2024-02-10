import axios from 'axios';

export const API_URL: string = 'http://5.35.93.223:7000/';

const api = axios.create({
    baseURL: API_URL,
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

export default api;