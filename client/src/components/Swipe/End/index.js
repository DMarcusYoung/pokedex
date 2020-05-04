import React from "react";
import { Link } from 'react-router-dom';

function End(props) {

  return (
    <div className="card">

      <h1 className="animated heartBeat slow">thank you</h1>

      <div className="alertInfo">
        <h2 className="alertText animated fadeIn delay-1s slower">
          you ran out of restaurants
        </h2>
        <h2 className="alertText animated fadeIn delay-1s slower">
          please wait for your partner to finish
        </h2>
      </div>

      <Link to="/lobby">
        <button className="backBtn">
          back
          </button>
      </Link>

    </div>
  )
}

export default End;