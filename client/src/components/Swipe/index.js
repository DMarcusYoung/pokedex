import React, { Component } from "react";

import { Link, withRouter } from 'react-router-dom';

import axios from "axios";

import Restaurant from './Restaurant';

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
      this.props.history.push(`/lobby`);
      // this.renderRestaurants()
    } else {
      console.log(this.state.restaurants[this.state.counter])
      return <Restaurant 
              rest={this.state.restaurants[this.state.counter]} 
              handleYes={this.handleYes}
              handleNo={this.handleNo}
              />
    }
  }

  clickNext = () => {
    this.setState ({counter: this.state.counter + 1 })
  }


  handleYes =() => {
    this.clickNext();
  }

  //  handleYes = async (restId) => {
  
  //   const res = await axios.patch('api/restaurant', {restId})
  //   if (res.error !== '') {
  //     console.log(res.error)
  //   } 
  //   if (res.match !== '') {
  //     this.props.history.push('/match')
  //   }
  //   if (res.success !== ''){
  //     this.clickNext();
  //   }
  // }
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

  

  handleNo =() => {
    this.clickNext();
  }


  render() {
    console.log(this.state.restaurants);
    return (

      <div className="card">
        <h4 className="sessionCode">Session Code: </h4>
        {this.renderRestaurants()}

      </div>
    )
  }
};

export default withRouter(Swipe);