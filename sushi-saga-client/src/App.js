import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
// const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    numberEaten:0,
    totalCost:0,
    budget:50
  }

  eatSushiHandler = (sushiCost) => {
    this.setState({
      numberEaten: this.state.numberEaten + 1,
      totalCost: this.state.totalCost + sushiCost
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  eatSushiHandler={this.eatSushiHandler} budget={this.state.budget} totalCost={this.state.totalCost}/>
        <Table totalCost = {this.state.totalCost} budget = {this.state.budget} numberEaten = {this.state.numberEaten}/>
      </div>
    );
  }
}

export default App;