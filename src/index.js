import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

console.log(state.products);

//let props = {myProducts:state.products}
//App(props)
ReactDOM.render(
  <App myProducts={state.products}/>,
  document.getElementById('root')
);
