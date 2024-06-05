// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://movieapp-d4od.onrender.com/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
