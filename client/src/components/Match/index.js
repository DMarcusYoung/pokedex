import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Match extends Component {
  state = {
    restaurant: {
      id: ''
    }
  }

  async componentDidMount() {
    try { 
      const { data: restaurant } = await axios.get(`/api/restaurant/1/${this.props.match.params.restId}`);
      this.setState({ restaurant });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.state);
    return (

      <div className="card">
        <Link to="/lobby">
  
          <h1 className="animated heartBeat slow">you have a match!</h1>
  
          <h2 className="animated fadeIn delay-1s slower">
            {this.state.restaurant.restaurant_name}
          </h2>
  
          <h3 className="animated fadeIn delay-1s slower">
            {this.state.restaurant.rating}
          </h3>
  
          <div className="choices animated fadeIn delay-1s slower">
            <div className="picBorder">
              <div className="picBox">
                <img className="picture" src={this.state.restaurant.restaurant_image_url} alt="" />
              </div>
            </div>
          </div>
  
        </Link>
  
      </div>
    )
  }
}
export default Match;