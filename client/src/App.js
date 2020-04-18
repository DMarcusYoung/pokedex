import React from 'react';
import Swipe from './components/Swipe';
import Lobby from './components/Lobby';
import Match from './components/Match';

const App = props => (

  <div className="container">
    <Lobby />
    <Swipe />
    <Match />
  </div>

);

export default App;