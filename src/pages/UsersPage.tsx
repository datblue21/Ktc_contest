import React from 'react';
import UserList from '../components/UserList';

const UsersPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">All Users</h1>
      <UserList />
    </div>
  );
};

export default UsersPage;
