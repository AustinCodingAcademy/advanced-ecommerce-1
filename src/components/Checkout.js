
import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    // const orderPanel = this.props.order.map((x,i) => <CartItem order={x} key={i} /> );

    return (
      <div className="modal fade" id="checkOut" tabIndex="-1" role="dialog" 
        aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Checkout</h4>
            </div>
            <div className="modal-body">
              <h3>Checkout</h3>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" 
                data-dismiss="modal">Submit Order</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
