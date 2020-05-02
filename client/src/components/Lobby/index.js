import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Lobby extends Component {

  render() {
    return (

      <div className="card lobby">
        <Link to="/create"> <button className="decideBtn">
          create
          </button>
        </Link>

        <Link to="/join">
          <button className="decideBtn">
            join
          </button>
        </Link>

      </div>
    )
  }
};

export default Lobby;