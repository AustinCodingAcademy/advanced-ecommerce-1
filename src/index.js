import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

function addItemToCart(){
  state.numberOfItemsInCart += 1;
  render();
}

function render(){
  ReactDOM.render(
    <App 
    addItemToCart={addItemToCart}
    state={state} />,
    document.getElementById('root')
  );
}
render();
