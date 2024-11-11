import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const UserContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
            const token =localStorage.getItem('token')
            if(token){
        const response = await axios.get('http://localhost:3000/api/auth/verify',{
            headers:{
                  "Authorization":`Bearer${token}`
            }
        });
        console.log('Response:', response.data); // Log response data
        if (response.data.success) {
          setUser(response.data.user);
          console.log('User:', response.data.user); // Log user data
        } else {
          setUser(null);
        }
      }
      } catch (error) {
        console.error('Error:', error); // Log error
      } finally {
        setLoading(false);
      }
    };
    verifyUser();
  }, []);

  const login = (user) => {
    setUser(user);
    console.log('Logged-in User:', user); // Log logged-in user
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    console.log('Logged out'); // Log logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

const useAuth = () => useContext(UserContext);

export { AuthContext, useAuth };