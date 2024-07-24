import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
	<li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Sign In</Link></li>
	  <li><Link to="/Download">Download Lecture Material</Link></li>
	   <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
// <li><Link to="/Download">Upload Lecture Materials </Link></li>  Modify for admi to upload lecture materials
