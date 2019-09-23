import React, { Component } from "react"
import SushiContainer from "./containers/SushiContainer"
import Table from "./containers/Table"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = { sushiList: [], sushiCount: 0 }

  componentDidMount() {
    fetch(`${API}`)
      .then(resp => resp.json())
      .then(data => {
        let sushiArray = data.map(datum => {
          return { ...datum, eaten: false }
        })
        this.setState({ sushiList: sushiArray })
      })
  }

  sushiLimiter = () => {
    let sushiArray = this.state.sushiList.slice(
      this.state.sushiCount,
      this.state.sushiCount + 4
    )
    return sushiArray
  }

  eatSushiHandler = sushiObj => {
    let newArray = this.state.sushiList.map(sushi => {
      if (sushi.id === sushiObj.id) {
        sushiObj.eaten = true
        return sushi
      } else {
        return sushi
      }
    })
    this.setState({ sushiList: newArray })
  }

  moreSushiHandler = () => {
    // console.log("more sushi")
    this.setState({ sushiCount: this.state.sushiCount + 4 })
  }

  plateHandler = () => {
    return this.state.sushiList.filter(sushi => sushi.eaten)
  }

  render() {
    // console.log(this.state.sushiArray)
    return (
      <div className="app">
        <SushiContainer
          sushiList={this.sushiLimiter()}
          eatSushiHandler={this.eatSushiHandler}
          moreSushiHandler={this.moreSushiHandler}
        />
        <Table sushiList={this.plateHandler()} />
      </div>
    )
  }
}

export default App
