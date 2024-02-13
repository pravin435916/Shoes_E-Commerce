import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/check', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Unauthorized');
        } else {
          setIsAdmin(true);
          console.log("Authorized as admin");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    checkAdmin();
  }, []);

  // if (!isAdmin) {
  //   return <div className="text-red-500">Unauthorized access!</div>;
  // }

  return (
    <>
      <div className='min-h-screen'>
        {/* Navbar */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold">Admin Dashboard</div>
            <div>
              <Link to='/admin/users' className="text-white mr-4">Users</Link>
              <Link to='/admin/products' className="text-white mr-4">Products</Link>
              <Link to='/admin/upload' className="text-white mr-4">Upload Product</Link>
              <a href="#" className="text-white mr-4">User Management</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto mt-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard!</h1>
          <div className="bg-white p-4 shadow-md rounded-md">
            <Link to='/'>Go To To User Pages</Link>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
