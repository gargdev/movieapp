import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedUser = jwtDecode(token);
    fetchUserDefaultList(decodedUser);
    setMessage('Login successful!');
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setMessage('Logout successful!');
    navigate('/');
  };

  const signUp = (token) => {
    localStorage.setItem('token', token);
    const decodedUser = jwtDecode(token);
    fetchUserDefaultList(decodedUser);
    setMessage('Sign up successful!');
    navigate('/');
  };

  const fetchUserDefaultList = async (decodedUser) => {
    try {
      const response = await api.get('/user/movie');
      setUser({ ...decodedUser, defaultList: response.data });
      console.log('Default list fetched and set:', response.data);
    } catch (error) {
      console.error('Error fetching user default list:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      fetchUserDefaultList(decodedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp, message, setMessage }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
