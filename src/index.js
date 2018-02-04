import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

function increaseCart(){
  state.numberOfItemsInCart += 1;
  console.log("# in cart:", state.numberOfItemsInCart);
  ReactDOM.render(
    <App increase={increaseCart} numberOfItemsInCart={state.numberOfItemsInCart} state={state}
    />,
    document.getElementById("root")
  );
}

ReactDOM.render(
  <App increase={increaseCart} numberOfItemsInCart={state.numberOfItemsInCart} state={state}
  />,
  document.getElementById("root")
);
