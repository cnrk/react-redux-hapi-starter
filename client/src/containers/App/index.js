import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'

import './App.css'
import { actions } from './ducks'
import Header from '../../components/Header'

import './styles.scss'

const App = ({ data, loadHelloWorld }) => (
  <div className="App">
    <Header />
    <p className="App-intro">
      To get started, edit <code>src/containers/App.js</code> and save to
      reload.
    </p>
    <p>Hello World from the Api Server: {data}</p>
    <p>
      <button onClick={loadHelloWorld}>load data from server</button>
    </p>
  </div>
)

App.propTypes = {
  data: PropTypes.string.isRequired,
  loadHelloWorld: PropTypes.func.isRequired
}

export default connect(
  state => ({
    data: state.app.data
  }),
  _.pick(actions, 'loadHelloWorld')
)(App)
