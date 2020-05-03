import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RestaurantList from './yelpRoutes/yelpApi/restsearch';
import Main from './components/Main';
import Lobby from './components/Lobby';
import Create from './components/Lobby/Create';
import Join from './components/Lobby/Join';
import Swipe from './components/Swipe';
import End from './components/Swipe/End';
import Match from './components/Match';

const App = props => (

  <Router>
    <div className="container">

      <Route exact path="/" component={Main} />
      <Route exact path="/lobby" component={Lobby} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/swipe/:roomNumber" component={Swipe} />
      <Route exact path="/match/:restId" component={Match} />
      <Route exact path="/apitest" component={RestaurantList} />
      <Route exact path="/end" component={End} />

    </div>
  </Router>
);

export default App;