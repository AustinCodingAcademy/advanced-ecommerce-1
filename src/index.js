import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

render(
  <App products={state.products} />,
  document.getElementById('root')
);
