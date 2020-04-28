import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (

      <Link to="/lobby">
      <div className="card">

          <h1 className="main animated fadeIn delay-0s slower">CHICKEN
          tinder</h1>


      </div>
      </Link>
    )
  }
};

export default Main;