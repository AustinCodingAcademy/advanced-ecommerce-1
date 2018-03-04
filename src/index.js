import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

function increaseCart(itemId){
  state.numberOfItemsInCart += 1;
  state.cartContents.hasOwnProperty(itemId) ? state.cartContents[itemId]++ : state.cartContents[itemId] = 1;
  ReactDOM.render(
    <App increaseCart={increaseCart} checkout={checkout} state={state} />,
    document.getElementById("root")
   );
 }

 function checkout(){
  fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      state.cartContents
    )
  }).then(alert('Order Submitted'));
  state.numberOfItemsInCart = 0;
  state.cartContents = {};
    ReactDOM.render(
    <App increaseCart={increaseCart} checkout={checkout} state={state} />,
    document.getElementById("root")
   );
 }

ReactDOM.render(
    <App increaseCart={increaseCart} checkout={checkout} state={state}/>,
  document.getElementById('root')
);
