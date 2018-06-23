import React, { Component } from 'react';
import Cart from "./Cart"

class Header extends Component {

    renderCart = () => {
        if (this.props.cartOpen) {
            return (
                <Cart 
                itemsInCart={this.props.itemsInCart} 
                numberOfItemsInCart={this.props.numberOfItemsInCart}
                checkout={this.props.checkout}
                checkoutAvailable={this.props.checkoutAvailable}
                orderPlaced={this.props.orderPlaced} //t/f
                placeOrder={this.props.placeOrder}/> //func
            )
        } else {
            return null;
        }
    }




    render() {

        return (
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
                            <li >
                                <a href="#" onClick={this.props.toggleCart}>Items In Cart ({this.props.numberOfItemsInCart})</a>
                            </li>
                        </ul>
                    </div>
                 
                </div>
                {this.renderCart()}
            </nav>
            );
    }
    
}

export default Header;
