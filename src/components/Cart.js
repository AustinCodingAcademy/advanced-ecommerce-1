import React, { Component } from 'react';
import CartItem from "./CartItem";

class Cart extends Component {
    renderItemsInCart = this.props.itemsInCart.map((item, index) => {
        return(
            <CartItem key={index} item={item}/>
        )
        })
        
        renderSomething = () => {
            if(this.props.numberOfItemsInCart>1){
                return <button>CHECKOUT</button>
    
            }
        }

    render() {

        return (
            <div>
                {this.renderItemsInCart}
                {this.renderSomething()}
            </div>
        )
    }
}

export default Cart;