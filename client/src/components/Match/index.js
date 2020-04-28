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

        <h1 className="animated fadeInUp delay-0s">You have a Match!</h1>

        <h2 className="animated fadeIn delay-1s slow">
          {this.state.name}
        </h2>

        <h3 className="animated fadeIn delay-1s slow">
          {this.state.rating}
        </h3>

        <p className="picture animated fadeIn delay-1s slow">
          {this.state.picture}
        </p>

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