import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const AdminRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // Check if the user is an admin
  const isAdmin = user && user.email === 'simonasakipaam@gmail.com';

  return isAdmin ? children : <Navigate to="/login" />;
};

export default AdminRoute;
