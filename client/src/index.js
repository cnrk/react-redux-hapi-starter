import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import './index.css'
import App from './App'
import { app } from './App/duck'
import rootSaga from './sagas'
import registerServiceWorker from './registerServiceWorker'

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers({ app })

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, enhancers)

sagaMiddleware.run(rootSaga)

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById('root')
)

registerServiceWorker()
