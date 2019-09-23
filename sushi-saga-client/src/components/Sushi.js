import React, { Fragment } from "react"

const Sushi = props => {
  // console.log(props.sushi)
  return (
    <Fragment>
      <div className="sushi">
        <div
          className="plate"
          onClick={() => props.eatSushiHandler(props.sushi)}
        >
          {props.sushi.eaten ? (
            false
          ) : (
            <img alt="sushi" src={props.sushi.img_url} width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {props.sushi.name} - ${props.sushi.price}
        </h4>
      </div>
    </Fragment>
  )
}

export default Sushi
