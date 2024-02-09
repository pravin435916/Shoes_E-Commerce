import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
const AdminDashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold">Admin Dashboard</div>
          <div>
            <Link to='/users' className="text-white mr-4">Users</Link>
            <a href="#" className="text-white mr-4">Products</a>
            <a href="#" className="text-white mr-4">User Management</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard!</h1>
        <div className="bg-white p-4 shadow-md rounded-md">
            <span className='text-3xl'>Users : </span>
            <UserList/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
