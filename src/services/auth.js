import api from './api';

export const authService = {
  // Login API call
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', {
        username: credentials.username,
        password: credentials.password
      });
      
      return {
        success: true,
        data: response.data,
        status: response.status
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed. Please check your credentials.',
        status: error.response?.status || 500
      };
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  },

  // Check authentication
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};