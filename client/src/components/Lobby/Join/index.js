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
    axios.get(`/api/restaurant/${this.state.joinCode}`)
      .then(response => {
        console.log(response)
        const data = response.data;
        const restaurant = data[0];
        this.props.history.push(`/swipe/${restaurant.room_number}`);
      })
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
        <h1>JOIN</h1>

        {/* Join code input box */}
        <form>
          <div>
            <input
              id="joinCode"
              className="formBox"
              onChange={this.handleJoinCode}
              value={this.state.joinCode}
              placeholder="Session Code"
              type="number"
            />
          </div>
        </form>

        {/* Joins another player */}
          <button className="decideBtn" onClick={this.handleJoin} id="joinSession">
            Join
          </button>

        <Link to="/lobby">
          <button className="backBtn">
            Back
          </button>
        </Link>
      </div>
    )
  }
};

export default Join;