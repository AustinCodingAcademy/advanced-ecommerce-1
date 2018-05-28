import React, { Component } from 'react'
import Cart from "../components/Cart"
import { cartTotal } from "./Calculations"

export default class Header extends Component{

    //calculate the cart total
    // cartTotal = ()=>this.props.cartItems.map((item,i)=>{
    //     return item.price.replace("$","")
    // }).reduce((s,c)=>{
    //     return (Number(s)+Number(c)).toFixed(2)})
    sumCart = () =>  <span>{cartTotal(this.props.cartItems)}</span>

    render(){
        //show the items in the cart
        const getCart = this.props.cartItems.map((item,i)=><Cart cartItem={item} key={i}/>)
        //determine if I should show a checkout button
        const checkOutBttn = this.props.cartItems.length!==0 
        ? <button className="btn btn-primary btn-block pull-right" data-toggle="modal" data-target="#checkOut">Proceed to Checkout ${this.sumCart()}</button>
        : <i className="glyphicon glyphicon-hourglass">{`Waiting on you...\n Go ahead and add something`}</i>
    return(
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Start Bootstrap</a>
              </div>
            
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                      <li>
                          <a href="#">About</a>
                      </li>
                      <li>
                          <a href="#">Services</a>
                      </li>
                      <li>
                          <a href="#">Contact</a>
                      </li>
                  </ul>
                  <ul className="nav navbar-right top-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="glyphicon glyphicon-shopping-cart" style={{fontSize: 20,color: '#fafafa'}}></i> ({this.props.itemsInCart})<b className="caret"></b></a>
                            <ul className="dropdown-menu list-group" style={{width: 300}}>
                                {getCart}
                                {checkOutBttn}
                            </ul>
                        </li>
                    </ul>
              </div>
          
          </div>
        
      </nav>
    )
  }
}