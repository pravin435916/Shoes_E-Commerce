import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { baseUrl } from '../baseUrl';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users when the component mounts
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${baseUrl}/admin/users`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Unauthorized');
        } else {
          console.log("Authorized");
        }
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []); // Run only once when the component mounts

  const deleteUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      // Remove the deleted user from the list
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        {error && <div className="text-red-500">Error: {error}</div>}
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded" onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Outlet />
    </>
  );
};

export default UserList;
