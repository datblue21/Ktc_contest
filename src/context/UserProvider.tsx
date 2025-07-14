import React from 'react';
import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types/user';

export interface UserContextType {
  users: User[];
  addUser: (userData: Omit<User, 'id'>) => void;
  getUserById: (id: number) => User | undefined;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (userData: Omit<User, 'id'>) => {
    const newUser: User = {
      ...userData,
      id: Date.now() // Simple ID generation
    };
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const getUserById = (id: number): User | undefined => {
    return users.find(user => user.id === id);
  };

  const value: UserContextType = {
    users,
    addUser,
    getUserById
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
