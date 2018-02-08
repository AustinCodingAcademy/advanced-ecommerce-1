import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

function increaseCart(){
  state.numberOfItemsInCart += 1;
  ReactDOM.render(
    <App increaseCart={increaseCart} checkout={checkout} state={state} />,
    document.getElementById("root")
   );
 }

 function checkout(){
  state.numberOfItemsInCart = 0;
  ReactDOM.render(
    <App increaseCart={increaseCart} checkout={checkout} state={state} />,
    document.getElementById("root")
   );
 }

ReactDOM.render(
    <App increaseCart={increaseCart} checkout={checkout} state={state}/>,
  document.getElementById('root')
);
