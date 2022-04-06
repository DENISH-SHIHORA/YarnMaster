import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";
import { auth } from "../firebase";

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  }

  function resetPassword(oobCode, newPassword) {
    return confirmPasswordReset(auth, oobCode, newPassword);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, signUp, logIn, logOut, forgotPassword, resetPassword }}
    >
      {children}
    </UserAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
