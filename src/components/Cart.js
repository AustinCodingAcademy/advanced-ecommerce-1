import React, { Component } from 'react'

export default class Cart extends Component{
  render(){
    const item = this.props.cartItem.item
    const price = this.props.cartItem.price
    const description = this.props.cartItem.description
    return(
      <div>
        <a href="#" className="list-group-item">
          <h4 className="list-group-item-heading">{item}</h4>
          <span className="badge">{price}</span>
          <p className="list-group-item-text">{description}</p>
        </a>
      </div>
    )
  }
}