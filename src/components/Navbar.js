import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="navbar">
      <ul>
        <Link exact to="/" className="link">
          Home
        </Link>
      </ul>
    </div>
  );
};
export default Home;
