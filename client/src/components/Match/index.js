import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Match extends Component {

  state = {
    name: "Title",
    rating: "Rating",
    picture: "Picture"
  };

  render() {
    return (

      <div className="card">

        <h1>You have a Match!</h1>

        <h1>{this.state.name}</h1>
        <h2>{this.state.rating}</h2>
        <p className="picture">{this.state.picture}</p>

        <Link to="/lobby">
          <button className="backBtn">
            Back
          </button>
        </Link>

      </div>
    )
  }
};

export default Match;