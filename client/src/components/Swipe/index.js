import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import Restaurant from './Restaurant';
import Match from "../Match";

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
    if (this.state.counter > 19) {
      this.setState({ counter: 0 })
      alert("You have reached the last restaurant")
      this.props.history.push(`/lobby`);

    } if (this.state.restaurants.num_of_yes === 2) {
      return <Match
      rest={this.state.restaurants[this.state.counter]}
      />
    } else {
      console.log(this.state.restaurants)
      return <Restaurant
        rest={this.state.restaurants[this.state.counter]}
        handleYes={this.handleYes}
        handleNo={this.handleNo}
      />
    }
  }

  clickNext = () => {
    this.setState({ counter: this.state.counter + 1 })
  }


  handleNo = () => {
    this.clickNext();
  }
  
  handleYes = async (restId) => {
    const res = await axios.patch(`/api/restaurant`, { restId })
    console.log(res)
    if (res.data === 2) {
      this.props.history.push('/match')
    }
    else {
      this.clickNext();
    }
  }

  /**
   * grab restaurant id inside handleYes
   * make axios call to update restaurant by id
   * in controller
   *  find rest by id
   *  check number_of_yes in rest
   *  if 0, update to 1 and return success status
   *  if 1, update to 2 and bring up match page
   * 
   * in controller, we can respond with an object like so 
   * res.json({error: '', success: '', match: ''})
   * 
   *  on the frontend once the response returns from the backend, we do a check for each of these fields
   * if error is defined, that means something went wrong
   * if success is defined, that means all good, call clickNext
   *  if match if defined, that means we have a match, redirect to match screen
   * 
   * 
   * Update room to closed
   * 
   * 
   */

  render() {
    return (

      <div className="card">
        {this.renderRestaurants()}

      </div>
    )
  }
};

export default withRouter(Swipe);