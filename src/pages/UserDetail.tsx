import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getUserById } = useUser();

  const userId = id ? parseInt(id, 10) : null;
  const user = userId ? getUserById(userId) : null;

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">User Details</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">User not found</p>
        </div>
        <Link 
          to="/users" 
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Users
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User Details</h2>
      
      <div className="bg-white border rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <p className="text-lg text-gray-900">{user.name}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <p className="text-lg text-gray-900">{user.email}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Age:</label>
            <p className="text-lg text-gray-900">{user.age || 'N/A'}</p>
          </div>
        </div>
      </div>
      
      <Link 
        to="/users" 
        className="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Users
      </Link>
    </div>
  );
};

export default UserDetail;
