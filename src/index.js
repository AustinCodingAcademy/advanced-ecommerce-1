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
