import axios from 'axios';

export const checkAuth = async () => {
  try {
    const response = await axios.get('http://localhost:5050/api/auth/verify', {
      withCredentials: true,
    });
    return response.data;
  } catch {
    return false;
  }
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};