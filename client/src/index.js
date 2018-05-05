import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import rootReducer from './ducks'
import rootSaga from './sagas'
import App from './containers/App'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, enhancers)

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
