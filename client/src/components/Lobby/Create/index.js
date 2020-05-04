import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class Create extends Component {

  state = {
    sessionCode: "",
    city: "",
    restaurants: []
  };

  
  async componentDidMount() {

  }


  handleCity = (e) => {
    const { value } = e.target;
    this.setState({ city: value });
  };


  handleSessionCode = (e) => {
    const { value } = e.target;
    this.setState({ sessionCode: value });
  };

  handleCreate = async (e) => {
    e.preventDefault();
    try {
      const roomList = await axios.get('/api/room')
      let validCode = true;
      for(let i in roomList.data){
        if(roomList.data[i].room_number === parseInt(this.state.sessionCode)){
          this.props.history.push(`/taken`);
          validCode = false;
          break;
        }
      }
      if(validCode){
        await axios.post('/api/room', {roomId: this.state.sessionCode});
        const data = await axios.post('/api/yelp', { roomId: this.state.sessionCode, city: this.state.city });
  
        this.props.history.push(`/swipe/${this.state.sessionCode}`);
      }
    } catch(e) {
      console.log(e);
    }

    // // console.log(useBusinessSearch('restaurants', 'Berkeley'))
    // // get request to Yelp Api for restaurant data
    // // axios.post('/api/restaurants')
    // console.log('hit')
  }

  render() {
    return (

      <div className="card">
        <div className="title">
        <h3>create</h3>
        <h3>session</h3>
        </div>

        {/* Input for city */}
        <form>
          <div>
            <input
              id="city"
              className="formBox"
              onChange={this.handleCity}
              value={this.state.city}
              placeholder="city"
              type="text"
            />
          </div>
        </form>

        {/* Input for session code to appear after generation */}
        <form onSubmit={ (e) => this.handleCreate(e)}>
          <div>
            <input
              id="sessionCode"
              className="formBox"
              onChange={this.handleSessionCode}
              value={this.state.sessionCode}
              placeholder="session code"
              type="number"
            />
          </div>
        </form>

        {/* Creates a session code */}
        {/* <Link to={`/swipe/${this.state.sessionCode}`}> */}
        <button className="decideBtn" onClick={this.handleCreate} id="createSession">
            create
        </button>
        {/* </Link> */}

        <Link to="/lobby">
          <button className="backBtn">
            back
          </button>
        </Link>
      </div >
    )
  }
};

export default Create;