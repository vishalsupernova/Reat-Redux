import React from 'react';
import ReactDOM from 'react-dom';
import Style from './style.css';
// import App from './app.js'
// import Calculate from './Temp.js'
// import Ninja from './ninja.js';
// import Red from './store.js';
import { Provider } from 'react-redux';
// import allReducers from './allreducers.js';
import Operation from './increment.js';
import { createStore } from 'redux';
import counter from './inreducer.js';

ReactDOM.render(<Provider store = {createStore(counter)}><Operation/></Provider>,
  document.getElementById('root')
)
