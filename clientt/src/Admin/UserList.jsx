import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users when the component mounts
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token'); 
        const response = await fetch('http://localhost:5000/admin/users', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Unauthorized');
        }else{
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

  return (
    <div>
      {error && <div>Error: {error}</div>}
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
