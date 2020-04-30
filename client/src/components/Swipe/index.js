import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import Restaurant from './Restaurant';
import Create from './../Lobby/Create';

class Swipe extends Component {

  state = {
    restaurants: []
  }

  componentDidMount() {
    axios.get(`/api/restaurant/${this.props.match.params.roomNumber}`)
      .then(({data}) => {
        this.setState({ restaurants: data });
      })
  }

  render() {
    console.log(this.state.restaurants);
    return (

      <div className="card">
        <h4 className="sessionCode">Session Code: </h4>
        <Restaurant restaurantList = {this.state.restaurants}/>

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