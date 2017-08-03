import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

// This sets the original picture style
var picStyle = {width: 50 + "%",};

// This alterPic changes the style effect of thumbnail
function alterPic(styleChange) {
  if (styleChange) {
    picStyle = {width: 100 + "%",};
    console.log(picStyle);
  }
  else {
    // picStyle = {width: 15.0 + "em",};
    picStyle = {width: 'inherit',};
    console.log(picStyle);
  }
  render();
}

function render() {
  ReactDOM.render(
    <App
      products={state.products}
      alterPic={alterPic}
      picStyle={picStyle} />,
    document.getElementById('root')
  );
}
render();
