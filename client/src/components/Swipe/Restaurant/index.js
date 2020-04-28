import React, { Component } from "react";

class Restaurant extends Component {

  state = {
    name: "Title",
    rating: "Rating",
    picture: "Picture"
  };

  nextRestaurant = () => {
    this.setState({ name: this.state.name + 'next' });
  };

  render() {
    return (

      <div>

        <h2>{this.state.name}</h2>
        <h3>{this.state.rating}</h3>
        <p className="picture">{this.state.picture}</p>

        <button className="noBtn" onClick={this.nextRestaurant}>X</button>
        <button className="yesBtn" onClick={this.nextRestaurant}>O</button>

      </div>
    )
  }
};

export default Restaurant;