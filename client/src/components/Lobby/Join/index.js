import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Join extends Component {

  state = {
    joinCode: ""
  };

  handleJoinCode = (e) => {
    const { value } = e.target;
    this.setState({ joinCode: value });
  };

  handleJoin = e => {
    e.preventDefault();
    axios.get(`/api/restaurant/${this.state.joinCode}`)
      .then(response => {
        // collects all the restaurants with the joincode/room_number entered along with room table data
        const data = response.data;
        // gets the first restaurant object in the array 
        const restaurant = data[0];
        // conditional to check if the room number entered is still an open session
        if (restaurant.closed === 'n') {
          // pulls the room_number from the first item in the array to create the dynamic url
        this.props.history.push(`/swipe/${restaurant.room_number}`);
        // if the room number is closed and there is a match, then show the match
        } else {
          // not sure if want to do another check if the room number is closed AND there was NO match
          this.props.history.push(`/match`);
        }
      })
      // If a session code is entered that does not exist
      .catch(function (error) {
        console.log(error);
        alert('The code you entered is invalid.  Please try again.')
      });
    // axios.get('/api/room').then(res => {
    //   console.log(res.data)
    //   for(let i in res.data){
    //     if(parseInt(this.state.joinCode) === res.data[i].room_number){

    //       this.props.history.push('/swipe')
    //       break;
    //     }
    //   }
    //   console.log('invalid session code')
    // })
  }

  render() {
    return (

      <div className="card">
                <div className="title">
        <h3>join</h3>
        <h3>session</h3>
        </div>

        {/* Join code input box */}
        <form onSubmit={ (e) => this.handleJoin(e)}>
          <div>
            <input
              id="joinCode"
              className="formBox"
              onChange={this.handleJoinCode}
              value={this.state.joinCode}
              placeholder="session code"
              type="number"
            />
          </div>
        </form>

        {/* Joins another player */}
          <button className="decideBtn" onClick={this.handleJoin} id="joinSession">
            join
          </button>

        <Link to="/lobby">
          <button className="backBtn">
            back
          </button>
        </Link>
      </div>
    )
  }
};

export default Join;