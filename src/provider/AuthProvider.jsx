import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Creating user on Register Page
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User Login for login page
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google SignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Github SignIn
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Getting Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => unsubscribe();
  });

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    googleSignIn,
    githubSignIn,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
