import React, { Fragment } from "react"

const Table = props => {
  console.log(
    props.sushiList.map(sushi => {
      return sushi.price
    })
  )
  let sushiPrice = props.sushiList.map(sushi => {
    return sushi.price
  })

  const renderPlates = array => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />
    })
  }
  const money = 100
  return (
    <Fragment>
      <h1 className="remaining">You have: ${money - sushiPrice} remaining!</h1>
      <div className="table">
        <div className="stack">
          {/* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
          renderPlates(props.sushiList)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
