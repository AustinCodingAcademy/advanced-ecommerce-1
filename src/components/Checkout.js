import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Checkout extends Component{

  handleOrder(order){
    console.log(order[0])
    const url = 'http://localhost:3001/orders';
    let data = {
      'Product': order[0].item,
      'Amount': 100,
      'ProductId': 123
    }

    fetch(url, {
      method: 'POST', // or 'PUT'
      headers:{
        'Content-Type': 'application/json'
      },
      mode: 'no-cors',
      body: data
    })
    .then(function(res){ console.log(res) })
    .catch(function(res){ console.log(res) })
  }

  render(){
    const orderPanel = this.props.order.map((x,i)=> <CartItem order={x} key={i}/> )
    return(
      <div className="modal fade" id="checkOut" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">Checkout</h4>
          </div>
          <div className="modal-body">
            {orderPanel}
          </div>
          <div className="modal-footer">
            <button type="button" onClick={()=>this.handleOrder(this.props.order)} className="btn btn-primary" data-dismiss="modal">Submit Order</button>
          </div>
        </div>
      </div>
    </div>
    // </div>
    )
  }
}