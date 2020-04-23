import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Restaurant from './Restaurant';
import Decide from './Decide';

class Swipe extends Component {

  render() {
    return (


      <div className="card">
        <Restaurant />
        <Decide />

        <Link to="/lobby">
          <button className="backBtn">
            Back
          </button>
        </Link>
        
      </div>
    )
  }
};

export default Swipe;