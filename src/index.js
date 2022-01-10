import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import {store} from './store/index';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

const rootElement = document.getElementById('root');
ReactDOM.render(app, rootElement)
