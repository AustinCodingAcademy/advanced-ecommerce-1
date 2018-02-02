import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';


function rerender() {
  ReactDOM.render(
    <App rerender={rerender} checkout={checkout} state={state} />,
    document.getElementById("root")
  );
}

function checkout() {
  const url = "http://localhost:4000/orders";
  const order = state.itemsInCart;
  const orderList = order.map( (product, i) => `\t${i + 1}. ${product.name}` );
  const orderConfirmation = `Order Confirmation:\n\n${orderList.join("\n")}`;

  fetch(url, {
    method: "post",
    body: JSON.stringify(order),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).then( alert(orderConfirmation) );

  // resets shopping cart
  state.itemsInCart = [];

  rerender();
}

ReactDOM.render(
  <App rerender={rerender} checkout={checkout} state={state} />,
  document.getElementById('root')
);
