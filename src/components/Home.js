import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Link className="home-link" to="/dailyimage">
      Enjoy your daily astro image! 
      </Link>
    </div>
  );
};
export default Home;
