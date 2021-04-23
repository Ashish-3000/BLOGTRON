import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);
  // will return a promise
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  // for login
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // for logout
  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged((user) => {
    //   setCurrentUser(user);
    // });
    // return unsubscribe;
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  const value = {
    currentUser,
    logout,
    signup,
    login,
    resetPassword,
    updateEmail,
    updatePassword,
  };
  if (pending) {
    return <>Loading...</>;
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
