import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

function addItemToCart(product) {
  state.cart.push(product);
  render();
}
function checkout(){
  console.log("checked out");
  
  const webRequestPromise = fetch("http://localhost:4000/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(state.cart)
  });
  state.cart = [];
  
  render();
}
function render() {
  ReactDOM.render(
    <App 
    checkout={checkout}
    addItemToCart={addItemToCart}
    state={state} />,
    document.getElementById('root')
  );
}
render();
