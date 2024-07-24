import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const Logout = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login'); // Redirect to login page after successful logout
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

    return (
	<div class="container">
	    <form>
		<button onClick={handleLogout}>Logout</button>
	    </form>
	</div>
	
  );
};

export default Logout;
