import React from "react";
import { Link } from 'react-router-dom';

function Match(props) {
  console.log(props)

  return (

    <div className="card">
      <Link to="/lobby">

        <h1 className="animated heartBeat slow">You have a Match!</h1>

        <h2 className="animated fadeIn delay-1s slower">
          {props.rest && props.rest.restaurant_name}
        </h2>

        <h3 className="animated fadeIn delay-1s slower">
          {props.rest && props.rest.rating}
        </h3>

        <div className="choices animated fadeIn delay-1s slower">
          <div className="picBorder">
            <div className="picBox">
              <img className="picture" src={props.rest && props.rest.restaurant_image_url} alt="" />
            </div>
          </div>
        </div>

      </Link>

    </div>
  )
};

export default Match;