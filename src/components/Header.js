import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Header extends Component {
  render() {
    const checkOutBttn = this.props.cart.length !== 0 ? 
      <button type="button" className="btn btn-info btn-lg" 
        data-toggle="modal" data-target="#myModal">Checkout
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
                  <div>
                    <div className="modal fade" id="myModal" role="dialog">
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" 
                              data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                          </div>
                          <div className="modal-body">
                            <p>This is a large modal.</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" 
                              data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

