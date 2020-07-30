import React from 'react';
import Home from './components/Home';
import DailyImage from './components/DailyImage';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/dailyimage" component={DailyImage} />
    </React.Fragment>
  );
};

export default App;
