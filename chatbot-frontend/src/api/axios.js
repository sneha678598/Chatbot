import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your backend URL
  timeout: 5000,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Example token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;
