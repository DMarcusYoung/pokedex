import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Lobby extends Component {

  render() {
    return (

      <div className="card">
        <Link to="/create"> <button className="decideBtn">
          Create
          </button>
        </Link>

        <Link to="/join">
          <button className="decideBtn">
            Join
          </button>
        </Link>

      </div>
    )
  }
};

export default Lobby;