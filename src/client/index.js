// Startup point for the client side app
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers'
import {renderRoutes} from 'react-router-config'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

// INITIAL STATE ships the Redux store state from the server to the client to hydrate the store state on initial render.

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
      {/*<Routes />*/}
    </BrowserRouter>
  </Provider>,
    document.querySelector('#root')
)
