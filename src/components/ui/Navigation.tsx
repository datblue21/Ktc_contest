import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="max-w-4xl mx-auto flex justify-center gap-6">
        <Link 
          to="/" 
          className="hover:underline hover:text-blue-300 transition duration-200"
        >
          Home
        </Link>
        <Link 
          to="/users" 
          className="hover:underline hover:text-blue-300 transition duration-200"
        >
          Users
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
