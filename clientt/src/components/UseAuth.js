import React, { useState, useEffect } from 'react';

const UseAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    
    if (isAuthenticated) {
      setUser({ username });
    } else {
      setUser(null);
    }
  }, [username]);

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return { user, login, logout };
};

export default UseAuth;

const checkAuthentication = () => {
  return localStorage.getItem('token') !== null;
};
