import 'normalize.css';
import './index.css';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
