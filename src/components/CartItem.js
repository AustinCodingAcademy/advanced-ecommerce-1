import React, { Component } from 'react';

class CartItem extends Component {
    render() {
        const itemStyle={
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 15,
            paddingRight: 15


        }
        return (
            <div style={itemStyle}>
                <h3 style={{display:"float-left"}}>{this.props.item.name}</h3> 
                <h3 style={{display:"float-right"}}>{this.props.item.amount}</h3>
                
            </div>
        )
    }
}

export default CartItem;