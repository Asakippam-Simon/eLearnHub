import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const userList = querySnapshot.docs.map(doc => {
          console.log('User Data:', doc.data()); // Debug log
          return doc.data();
        });
        setUsers(userList);
        console.log('User List:', userList); // Debug log
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
