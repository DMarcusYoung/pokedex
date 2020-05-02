import React from "react";

function Restaurant(props) {
  console.log(props)

  return (
    <div>
      <div>
        <h4>{props.rest && props.rest.room_number}</h4>
        <h2>{props.rest && props.rest.restaurant_name}</h2>
        <h3>{props.rest && props.rest.rating}</h3>
      </div>

      <div className="choices">
        <div className="picBox"><img className="picture" src={props.rest && props.rest.restaurant_image_url} alt="" />
        </div>


        <button className="noBtn" onClick={() => props.handleNo()}>X</button>
        <button className="yesBtn" onClick={() => props.handleYes(props.rest.id)} >O</button>
      </div>

    </div>
  )

}

export default Restaurant;