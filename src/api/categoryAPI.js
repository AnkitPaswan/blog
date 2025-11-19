import axios from './axios';

export const categoryAPI = {
  // Get all categories
  getCategories: () => axios.get('/api/categories'),

  // Get category by ID
  getCategory: (id) => axios.get(`/api/categories/${id}`),

  // Create new category
  createCategory: (categoryData) => axios.post('/api/categories', categoryData),

  // Update category
  updateCategory: (id, categoryData) => axios.put(`/api/categories/${id}`, categoryData),

  // Delete category
  deleteCategory: (id) => axios.delete(`/api/categories/${id}`)
};
