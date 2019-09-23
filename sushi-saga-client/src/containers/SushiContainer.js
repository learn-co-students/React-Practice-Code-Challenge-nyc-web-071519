import React from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

  state = {
    allSushi: [],
    pageStart:0
  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allSushi: data
      })
    })
  }

  changePage = () => {
    this.setState({
      pageStart: this.state.pageStart + 4
    })
  }

  render(){
    let mappedSushi = this.state.allSushi.map(sushi => <Sushi sushi={sushi} key={sushi.id} budget={this.props.budget} totalCost={this.props.totalCost} clickHandler={this.props.eatSushiHandler}/>).splice(this.state.pageStart,4)
    return (
      <div className="belt">
        {
          mappedSushi
        }
        <MoreButton onClickHandler={this.changePage}/>
      </div>
    ) 
  }
  
}

export default SushiContainer