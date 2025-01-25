// /src/api/chatbotApi.js
import api from './axios';

export const sendChatQuery = async (query) => {
  try {
    const response = await api.post('/chat', { query });
    return response.data; // Returning data received from the backend
  } catch (error) {
    throw error.response || error; // Return error if any
  }
};

export const fetchProducts = async (filters) => {
  try {
    const response = await api.get('/products', { params: filters });
    return response.data; // List of products based on filters
  } catch (error) {
    throw error.response || error;
  }
};

export const fetchSuppliers = async (filters) => {
  try {
    const response = await api.get('/suppliers', { params: filters });
    return response.data; // List of suppliers based on filters
  } catch (error) {
    throw error.response || error;
  }
};
