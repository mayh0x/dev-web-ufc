import { useState, createContext, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { firebase } from "../db/index";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const auth = getAuth(firebase);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = sessionStorage.getItem("@AuthFirebase:user");
      if (storageUser) {
        setUser(storageUser);
      }
    };

    loadStorageData();
  }, []);

  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        sessionStorage.setItem("@AuthFirebase:user", JSON.stringify(user));
      })
      .catch((error) => {});
  }

  function handleLogout() {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
      })
      .catch((error) => {});
  }

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {})
      .catch((error) => {});
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        handleLogout,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
