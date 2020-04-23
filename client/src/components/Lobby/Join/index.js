import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Join extends Component {

  state = {
    joinCode: ""
  };

  handleJoinCode = (e) => {
    const { value } = e.target;
    this.setState({ joinCode: value });
  };

  render() {
    return (

      <div className="card">
        <h1>JOIN</h1>

        {/* Join code input box */}
        <form>
          <div>
            <input
              id="joinCode"
              className="formBox"
              onChange={this.handleJoinCode}
              value={this.state.joinCode}
              placeholder="Session Code"
              input type="number"
            />
          </div>
        </form>

        {/* Joins another player */}
        <Link to="/swipe">
          <button className="decideBtn" id="joinSession">
            Join
          </button>
        </Link>

        <Link to="/lobby">
          <button className="backBtn">
            Back
          </button>
        </Link>
      </div>
    )
  }
};

export default Join;