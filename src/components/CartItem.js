import React, { Component } from 'react'

export default class CartItem extends Component{
  render(){
    return(
      <div>
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.order.item}</h3>
          </div>
          <div className="panel-body">
            <p>{this.props.order.description}</p>
            <p>{this.props.order.price}</p>
          </div>
        </div>
      </div>
    )
  }
}