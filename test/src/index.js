import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import Arr from './Arr';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
    <Provider store={store}>
    <App />
    <Arr/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

