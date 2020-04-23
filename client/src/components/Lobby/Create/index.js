import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Create extends Component {

  state = {
    sessionCode: "",
    city: ""
  };

  handleCity = (e) => {
    const { value } = e.target;
    this.setState({ city: value });
  };
  handleSessionCode = (e) => {
    const { value } = e.target;
    this.setState({ sessionCode: value });
  };

  render() {
    return (

      <div className="card">
        <h1>CREATE A ROOM</h1>

        {/* Input for city */}
        <form>
          <div>
            <input
              id="city"
              className="formBox"
              onChange={this.handleCity}
              value={this.state.city}
              placeholder="City"
              input type="text"
            />
          </div>
        </form>

        {/* Input for session code to appear after generation */}
        <form>
          <div>
            <input
              id="sessionCode"
              className="formBox"
              onChange={this.handleSessionCode}
              value={this.state.sessionCode}
              placeholder="Session Code"
              input type="number"
            />
          </div>
        </form>

        {/* Creates a session code */}
        <Link to="/swipe">
          <button className="decideBtn" id="createSession">
            Create
        </button>
        </Link>

        <Link to="/lobby">
          <button className="backBtn">
            Back
          </button>
        </Link>

      </div >
    )
  }
};

export default Create;