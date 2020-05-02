import React from "react";

function Restaurant(props) {
  console.log(props)

  return (
    <div>
      <div className="titleInfo">
        <h4>{props.rest && props.rest.room_number} - {props.rest && props.rest.city}</h4>
        <h2>{props.rest && props.rest.restaurant_name}</h2>
        <h4 className="stars">{"★".repeat(props.rest && props.rest.rating)}</h4>
      </div>

      <div className="choices">
        <div className="picBorder">
          <div className="picBox">
            <img className="picture" src={props.rest && props.rest.restaurant_image_url} alt="" />
          </div>
        </div>

        <img src="../../../../images/no.jpg" className="noBtn" onClick={() => props.handleNo()} />
        <img src="../../../../images/yes.jpg" className="yesBtn" onClick={() => props.handleYes(props.rest.id)} />
      </div>

    </div>
  )

}

export default Restaurant;