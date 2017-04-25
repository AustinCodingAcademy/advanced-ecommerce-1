import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import App from './App';
import './index.css';
import state from './state';


ReactDOM.render(
    <App />,
 render(
   <App products={state.products} />,

    document.getElementById('root')
)
);
