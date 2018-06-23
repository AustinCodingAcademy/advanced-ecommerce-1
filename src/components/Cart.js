import React, { Component } from 'react';
import CartItem from "./CartItem";
import Checkout from "./Checkout";

class Cart extends Component {
    renderItemsInCart = this.props.itemsInCart.map((item, index) => {
        return(
            <CartItem key={index} item={item}/>
        )
        })
        
        renderCheckoutButton = () => {
            if(this.props.numberOfItemsInCart && !this.props.checkoutAvailable){
                const itemsInCart = this.props.itemsInCart.map((item, index)=>{
                    return(
                        <CartItem key={index} item={item}/>
                    )
                })
                return (
                    <div>
                        {itemsInCart}
                        <button onClick={this.props.checkout}>CHECKOUT</button>
                    </div>
                )
            } if(this.props.checkoutAvailable && !this.props.orderPlaced){
                return <Checkout orderPlaced={this.props.orderPlaced} placeOrder={this.props.placeOrder}/>
            } if(this.props.orderPlaced) {
                return (
                    <h1>Order Placed!</h1>
                )
            }
        }


        handleClearCart = () => {
            if(this.props.checkoutAvailable){

            }
        }

    render() {

        return (
            <div>
                {this.renderCheckoutButton()}
                
            </div>
        )
    }
}

export default Cart;