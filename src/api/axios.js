import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  register: (userData) => api.post('/api/auth/register', userData),
};

// Posts API calls
export const postsAPI = {
  getPosts: (category) => api.get('/api/posts', { params: { category } }),
  getPost: (id) => api.get(`/api/posts/${id}`),
  searchPosts: (term) => api.get(`/api/posts/search/${encodeURIComponent(term)}`),
  createPost: (postData) => api.post('/api/posts', postData),
  updatePost: (id, postData) => api.put(`/api/posts/${id}`, postData),
  deletePost: (id) => api.delete(`/api/posts/${id}`),
};

export default api;
