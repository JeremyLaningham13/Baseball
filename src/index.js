import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter;

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
