import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import Restaurant from './Restaurant';
import Create from './../Lobby/Create';

class Swipe extends Component {

  state = {
    restaurants: [],
    counter: 0
  }

  componentDidMount() {
    axios.get(`/api/restaurant/${this.props.match.params.roomNumber}`)
      .then(({ data }) => {
        this.setState({ restaurants: data });
      })
  }
  renderRestaurants() {
    if (this.state.counter > this.state.restaurants.length) {
      this.setState({ counter: 0 })
      this.renderRestaurants()
    } else {
      console.log(this.state.restaurants[this.state.counter])
      return <Restaurant 
              rest={this.state.restaurants[this.state.counter]} 
              clickNext={this.clickNext}
              />
    }
  }

  clickNext = () => {
    this.setState ({counter: this.state.counter + 1 })
  }

  handleYes =() => {
    // pass in restaurant id 
    // axios.post
    this.clickNext();
  }

  render() {
    console.log(this.state.restaurants);
    return (

      <div className="card">
        <h4 className="sessionCode">Session Code: </h4>
        {this.renderRestaurants()};

        <Link to="/match">
          <button className="backBtn">
            Match
          </button>
        </Link>

      </div>
    )
  }
};

export default Swipe;