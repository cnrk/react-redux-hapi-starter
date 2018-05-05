import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <header className="App-header">
    <h1 className="App-title">{title}</h1>
  </header>
)

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Welcome to Hapi-React-Redux-Boilerplate'
}

export default Header
