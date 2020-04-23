import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Join extends Component {

  state = {
    input: ""
  };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };

  render() {
    return (

      <div className="card">
        <h1>JOIN</h1>

        <form>
          <div>
            <input
            className="formBox"
              onChange={this.handleInputChange}
              value={this.state.input}
              input type="number"
            />
          </div>
        </form>

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