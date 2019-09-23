import React, { Fragment } from "react"
import MoreButton from "../components/MoreButton"
import Sushi from "../components/Sushi"

const SushiContainer = props => {
  // console.log(props)
  let sushi = props.sushiList.map(sushiObj => {
    return (
      <Sushi
        key={sushiObj.id}
        sushi={sushiObj}
        eatSushiHandler={props.eatSushiHandler}
      />
    )
  })
  return (
    <Fragment>
      <div className="belt">
        {sushi}
        <MoreButton moreSushiHandler={props.moreSushiHandler} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
