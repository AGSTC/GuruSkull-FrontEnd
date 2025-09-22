// utils/authUtils.js - Create this file in your utils folder
export const getCurrentUser = () => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log('Current user data:', user); // Debug log
      return user;
    }
    console.log('No user data found in localStorage'); // Debug log
    return null;
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
    return null;
  }
};

export const setCurrentUser = (userData) => {
  try {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('authToken', 'authenticated');
    
    // Dispatch custom event to notify all components
    window.dispatchEvent(new CustomEvent('userDataChanged', { 
      detail: userData 
    }));
    
    console.log('User data saved:', userData); // Debug log
    return true;
  } catch (error) {
    console.error('Error saving user data to localStorage:', error);
    return false;
  }
};

export const clearCurrentUser = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('authToken');
  
  // Dispatch custom event to notify all components
  window.dispatchEvent(new CustomEvent('userDataChanged', { 
    detail: null 
  }));
  
  console.log('User data cleared'); // Debug log
};

export const getUserRole = () => {
  const user = getCurrentUser();
  return user ? user.role : 'tuition_owner';
};

export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  const user = getCurrentUser();
  return token === 'authenticated' && user !== null;
};