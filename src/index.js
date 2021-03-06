import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore';
import App from './App';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={ store }>
  <App />
	</Provider>,
  document.getElementById('container')
);
