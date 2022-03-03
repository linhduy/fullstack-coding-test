import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import firebase, { auth } from './firebaseApp';

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};