import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import api from '../utils/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (token) => {
    localStorage.setItem('token', token);
    const decodedUser = jwtDecode(token);
    fetchUserDefaultList(decodedUser); // Fetch the user's default list after login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const fetchUserDefaultList = async (decodedUser) => {
    try {
      const response = await api.get('/lists/default');
      setUser({ ...decodedUser, defaultList: response.data });
      console.log('Default list fetched and set:', response.data); // Add logging
    } catch (error) {
      console.error('Error fetching user default list:', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      fetchUserDefaultList(decodedUser); // Fetch the user's default list if a token is found
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
