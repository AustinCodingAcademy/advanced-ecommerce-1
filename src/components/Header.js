import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Header extends Component {
  render() {
    const checkOutBttn = this.props.cart.length !== 0 ? 
      <button 
        className="btn btn-primary btn-block pull-right" 
        data-toggle="modal" 
        data-target="#checkOut">
        Proceed to Checkout
      </button> : "Nothing in cart";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" 
              data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
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
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Items in Cart ({this.props.numberOfItemsInCart})
                <span className="caret" /></a>
                <ul className="dropdown-menu">
                  <li><a href="#">{checkOutBttn}</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  numberOfItemsInCart: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired
};

