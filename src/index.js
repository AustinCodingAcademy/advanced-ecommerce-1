import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

var picStyle = {width: 50 + "%",};

function alterPic(styleChange) {
  if (styleChange) {
    picStyle = {width: 100 + "%",};
    console.log(picStyle);
  }
  else {
    picStyle = {width: 15.0 + "em",};;
    console.log(picStyle);
  }
}


ReactDOM.render(
  <App
    products={state.products}
    alterPic={alterPic}
    picStyle={picStyle} />,
  document.getElementById('root')
);
