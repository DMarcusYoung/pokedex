import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Lobby extends Component {

  render() {
    return (

      <div className="card">
        <Link to="/create"> <button className="createBtn">
          Create
          </button>
        </Link>

        <Link to="/join">
          <button className="joinBtn">
            Join
          </button>
        </Link>

      </div>
    )
  }
};

export default Lobby;