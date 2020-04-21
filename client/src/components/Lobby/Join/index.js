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
          <div className="formBox">
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              input type="text"
            />
          </div>
        </form>

        <Link to="/">
          <button className="backBtn">
            Back
          </button>
        </Link>
      </div>
    )
  }
};

export default Join;