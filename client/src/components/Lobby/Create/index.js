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

  handleCreate = async () => {
    try {
      console.log("Im hit")
      // await axios.post('/api/room', {roomId: this.state.sessionCode});
      const data = await axios.post('/api/yelp', { roomId: this.state.sessionCode, city: this.state.city });
      console.log(data);
      // this.props.history.push(`/swipe/${this.state.sessionCode}`);
      axios.get('/api/room').then(res =>{
        let canPost = true;
        console.log(res)
        for(let i in res.data){
          if(parseInt(this.state.sessionCode) === res.data[i].room_number){
            alert('That code is already taken');
            canPost = false;
            break;
          }
        }
        if(canPost) {
          axios.post('/api/room', {roomId: this.state.sessionCode})
          this.props.history.push(`/swipe/${this.state.sessionCode}`);
        }
      })
    } catch(e) {
      console.log(e);
    }

    // // console.log(useBusinessSearch('restaurants', 'Berkeley'))
    // // get request to Yelp Api for restaurant data
    // // axios.post('/api/restaurants')
    // console.log('hit')
  }

  render() {
    console.log(this.props);
    return (

      <div className="card">
        <h1>CREATE SESSION</h1>

        {/* Input for city */}
        <form>
          <div>
            <input
              id="city"
              className="formBox"
              onChange={this.handleCity}
              value={this.state.city}
              placeholder="City"
              type="text"
            />
          </div>
        </form>

        {/* Input for session code to appear after generation */}
        <form>
          <div>
            <input
              id="sessionCode"
              className="formBox"
              onChange={this.handleSessionCode}
              value={this.state.sessionCode}
              placeholder="Session Code"
              type="number"
            />
          </div>
        </form>

        {/* Creates a session code */}
        {/* <Link to={`/swipe/${this.state.sessionCode}`}> */}
        <button className="decideBtn" onClick={this.handleCreate} id="createSession">
            Create
        </button>
        {/* </Link> */}

        <Link to="/lobby">
          <button className="backBtn">
            Back
          </button>
        </Link>

        <RestaurantList />
      </div >
    )
  }
};

export default Create;