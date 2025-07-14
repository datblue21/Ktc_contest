import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

const UserList: React.FC = () => {
  const { users } = useUser();

  if (users.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">User List</h2>
        <p className="text-gray-600">No users found. Add some users to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">User List</h2>
      
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-500">Age: {user.age ? user.age : 'N/A'}</p>
              </div>
              <Link 
                to={`/users/${user.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
