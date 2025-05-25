import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = async (name, photo) => {
    // console.log(auth.currentUser);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const userActive = onAuthStateChanged(auth, (currentUser) => {
      // console.log("Current User", currentUser);
      setUser(currentUser);
      if (currentUser?.email) {
        const userEmail = { email: currentUser.email };
        axios
          .post(
            "https://restaurant-management-server-sage.vercel.app/jwt",
            userEmail,
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            res.data;
          });
      } else {
        axios
          .post(
            "https://restaurant-management-server-sage.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => res.data);
      }
      setLoading(false);
    });
    return () => {
      userActive();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
