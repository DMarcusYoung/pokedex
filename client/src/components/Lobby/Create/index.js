import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

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
  handleCreate = () => {
    axios.post('/api/room', {roomId: this.state.sessionCode})

    // get request to Yelp Api for restaurant data
    // axios.post('/api/restaurants')
    console.log('hit')
  }

  render() {
    return (

      <div className="card">
        <h1>CREATE SESSION</h1>

        {/* Input for city */}
        <form>
          <div>
            <input
              id="city"
              className="formBox"
              onChange={this.handleCity}
              value={this.state.city}
              placeholder="City"
              type="text"
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
              type="number"
            />
          </div>
        </form>

        {/* Creates a session code */}
        <Link to="/swipe">
          <button className="decideBtn" onClick={this.handleCreate} id="createSession">
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