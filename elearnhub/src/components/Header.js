import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
	<li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Sign In</Link></li>
        <li><Link to="/Dashboard">Upload Assignment</Link></li>
        <li><Link to="/assessment">Take Assessement</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
