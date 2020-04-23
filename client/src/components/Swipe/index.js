import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Restaurant from './Restaurant';

class Swipe extends Component {

  render() {
    return (

      <div className="card">
        <Restaurant />

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