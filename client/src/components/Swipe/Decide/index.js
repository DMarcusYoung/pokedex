import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Decide extends Component {

  state = {
    restaurant: 0
  };

  handleIncrement = () => {
    this.setState({ restaurant: this.state.restaurant + 1 });
  };

  handleDecrement = () => {
    this.setState({ restaurant: this.state.restaurant - 1 });
  };

  render() {
    return (
      <div>

        <Link to={{pathname: `/swipe/${this.state.restaurant}`}}>
        <button className="noBtn" onClick={this.handleDecrement}>X</button>
        </Link>

        <Link to={{pathname: `/swipe/${this.state.restaurant}`}}>
        <button className="yesBtn" onClick={this.handleIncrement}>O</button>
        </Link>
      </div>
    );
  }
}

export default Decide;