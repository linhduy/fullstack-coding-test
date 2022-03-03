import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import firebase from './firebaseApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";

export const AuthContext = React.createContext(null);

export const AuthProvider: React.FC = ({ children }) => {
  const auth = getAuth(firebase.app());
  const [user, userLoading, userError] = useAuthState(auth);
  
  return (
    <AuthContext.Provider
      value={{ user, userLoading, userError }}
    >
      {children}
    </AuthContext.Provider>
  );
};