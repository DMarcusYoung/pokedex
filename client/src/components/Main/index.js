import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Main extends Component {

  render() {
    return (


      <div className="card">
        <Link to="/lobby">

          <div className="mainPage animated fadeIn delay-0s slower">
            <img className="logo" src="../../../images/logo.png" alt="logo" />
            <h1 className="main">chicken</h1>
              <h1 className="main">tinder</h1>
          </div>

        </Link>
      </div>

    )
  }
};

export default Main;