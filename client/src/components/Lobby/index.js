import React from 'react';
import Create from './Create';
import Join from './Join';

const Lobby = props => {
  return (

      <div className="card">
        <Create />
        <Join />

      </div>
  )
};

export default Lobby;