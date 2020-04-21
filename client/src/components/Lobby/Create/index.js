import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Create extends Component {

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
        <h1>CREATE A ROOM</h1>
        <form>
          <div>
            <input
              className="formBox"
              onChange={this.handleInputChange}
              value={this.state.input}
              input type="text"
            />
          </div>
        </form>

        <button className="decideBtn">
          Create
          </button>

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