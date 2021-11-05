import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

function AuthProvider(props) {
  const localStorageToken = '@today:token';
  const localStorageUser = '@today:user';
  const [userData, setUserData] = useState('');
  const signIn = async (email, password) => {
    const response = await api.post('login', {
      email,
      password,
    });
    const { token, user } = response.data;
    setUserData(user);
    const userDataString = JSON.stringify(user);
    if (token) {
      localStorage.setItem(localStorageToken, token);
      localStorage.setItem(localStorageUser, userDataString);
      history.pushState({}, '', '/tasks');
    }
  };

  const signOut = async () => {
    setUserData(null);
    localStorage.clear();
    history.pushState({}, '', '/');
  };

  useEffect(() => {
    const hasToken = localStorage.getItem(localStorageToken);
    if (hasToken) {
      history.pushState({}, '', '/tasks');
    } else {
      history.pushState({}, '', '/');
    }
  }, []);
  return (
    <AuthContext.Provider value={ { userData, signIn, signOut } }>
      { props.children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;
