"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { login, logout } from "../redux/slice";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Get user data from Firestore
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Dispatch user data to Redux
            dispatch(login(userData));
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        // User is signed out, clear Redux state
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
}
