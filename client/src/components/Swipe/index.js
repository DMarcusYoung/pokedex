import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
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
    if (this.state.counter > (this.state.restaurants.length - 1) && this.state.counter > 0) {
      this.setState({ counter: 0 })
      this.props.history.push('/end')
    } if (this.state.restaurants.num_of_yes === 2) {
      this.props.history.push(`/match/${this.state.restaurants.id}`);
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

  handleYes = async (restId, roomNumber) => {
    const res = await axios.patch(`/api/restaurant`, { restId })
    if (res.data.num_of_yes === 2) {
      console.log({ roomNumber })
      await axios.patch(`/api/room`, { roomNumber })
      this.props.history.push(`/match/${res.data.id}`);
    }
    else {
      this.clickNext();
    }
  }

  render() {
    return (

      <div className="card">
        {this.renderRestaurants()}
      </div>
    )
  }
};

export default withRouter(Swipe);