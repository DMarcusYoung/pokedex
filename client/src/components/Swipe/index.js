import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

import Restaurant from './Restaurant';
import Create from './../Lobby/Create';

class Swipe extends Component {

  render() {
    return (

      <div className="card">
        <h4 className="sessionCode">Session Code</h4>
        <Restaurant />

        <Link to="/match">
          <button className="backBtn">
            Match
          </button>
        </Link>

      </div>
    )
  }
};

export default Swipe;