import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logOut = () => signOut(auth);
  const googleLogin = () => signInWithPopup(auth, provider);

  const updateUserProfile = (name, photo) =>
    updateProfile(auth.currentUser, { displayName: name, photoURL: photo });

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
}
