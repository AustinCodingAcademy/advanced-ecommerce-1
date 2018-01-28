import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';


function increaseCart(){
  console.log(state.numberOfItemsInCart += 1);
  ReactDOM.render(
    <App increaseCart={increaseCart} state={state} />,
    document.getElementById("root")
  );
}


ReactDOM.render(
  <App increaseCart={increaseCart} state={state} />,
  document.getElementById('root')
);
