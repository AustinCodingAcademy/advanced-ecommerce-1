import React, { Component } from 'react';

class Checkout extends Component {
    render() {
        const CheckoutStyle = {
            display: "flex",
            flexDirection: "column",
            paddingLeft: 30,
            paddingRight: 30,
            alignItems: "center",
            color: "#ededed"
        }
        const inputStyle = { 
            margin: 15,
            width: 500,
            color: "#333"
        }

        const buttonStyle = {
            color: "#333",
            width: 300,
            borderRadius: 5,
            height: 25,
        }
        return (
            <div style={CheckoutStyle}>
                <h2>Place your order:</h2>
                <input style={inputStyle} type="text" placeholder="Full Name"/>  
                <input style={inputStyle} type="text" placeholder="Address"/>  
                <input style={inputStyle} type="text" placeholder="Email Address"/>  
                <input style={inputStyle} type="text" placeholder="Phone Number"/>  
                <button style={buttonStyle} onClick={this.props.orderPlaced}>Place Order</button>
            </div>
        )
    }
}

export default Checkout;