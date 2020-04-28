import React, { Component } from "react";
import {useBusinessSearch} from '../../../yelpRoutes/yelpApi/useBusinessSearch';
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

        <h1>{this.state.name}</h1>
        <h2>{this.state.rating}</h2>
        <p className="picture">{this.state.picture}</p>

        <button className="noBtn" onClick={this.nextRestaurant}>X</button>
        <button className="yesBtn" onClick={this.nextRestaurant}>O</button>

      </div>
    )
  }
};
console.log (useBusinessSearch);
export default Restaurant;