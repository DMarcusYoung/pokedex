import React from "react";
import { Link } from 'react-router-dom';

function Taken(props) {

  return (
    <div className="card">

      <h1 className="animated heartBeat slow">sorry</h1>

      <div className="alertInfo">
        <h2 className="alertText animated fadeIn delay-1s slower">
          the session code you're trying to use has already been taken
        </h2>
        <h2 className="alertText animated fadeIn delay-1s slower">
          please try again
        </h2>
      </div>

      <Link to="/create">
        <button className="backBtn">
          back
          </button>
      </Link>

    </div>
  )
}

export default Taken;