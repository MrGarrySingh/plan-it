"use client";

import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { User as FirebaseUser } from "firebase/auth";

// Define the context type, including the setter function
type UserContextType = {
  currentUser: FirebaseUser | null;
  setCurrentUser: Dispatch<SetStateAction<FirebaseUser | null>>;
};

// Create context - as the actual value you want to access
export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

type UserProviderProps = {
  children: ReactNode;
};

// Provider component to wrap the app with context
export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
