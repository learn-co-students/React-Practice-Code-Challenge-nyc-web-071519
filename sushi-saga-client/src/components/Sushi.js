import React from 'react'

class Sushi extends React.Component{

  state = {
    eaten: false
  }

  onClickHandler = () => {
    console.log(this.props)
    if (this.props.totalCost + this.props.sushi.price <= this.props.budget){
      
      this.setState({
        eaten: true
      })
      this.props.clickHandler(this.props.sushi.price)
    }
  }

  render (){
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.onClickHandler}>
          { 
            this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name}/>
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi