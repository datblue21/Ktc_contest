import React from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">User Management System</h1>
        <UserForm />
      </div>
      
      <div className="mt-8">
        <UserList />
      </div>
    </div>
  );
};

export default HomePage;
