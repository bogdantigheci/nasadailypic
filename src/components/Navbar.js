import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="navbar">
      <Link exact to="/" className="link">
        Home
      </Link>
    </div>
  );
};
export default Home;
