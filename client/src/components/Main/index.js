import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (

      <Link to="/lobby">
      <div className="card animated pulse delay-1s">

          <h1 className="main">CHICKEN
          tinder</h1>


      </div>
      </Link>
    )
  }
};

export default Main;