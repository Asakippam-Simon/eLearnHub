import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to eLearnHub</h1>
      <p>eLearnHub is a centralized platform for storing and sharing educational materials and taking online assessments</p>
      <Link to="/Header">
        <button>Click to select any learning material to download</button>
      </Link>
    </div>
  );
};

export default Home;
