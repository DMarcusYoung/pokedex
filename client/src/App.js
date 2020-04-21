import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Swipe from './components/Swipe';
import Lobby from './components/Lobby';
import Create from './components/Lobby/Create';
import Join from './components/Lobby/Join';
import Match from './components/Match';

const App = props => (

  <Router>
  <div className="container">

      <Route exact path="/" component={Lobby} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/swipe" component={Swipe} />
      <Route exact path="/match" component={Match} />

  </div>
  </Router>
);

export default App;