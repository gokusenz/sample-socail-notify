import React, { PropTypes } from 'react'
import './App.scss'

const App = ({ children }) => (
  <div className="App">
    <div className="App-header">
      <h1>Notify App</h1>
    </div>
    <p>{ children }</p>
  </div>
)

App.propTypes = {
  children: PropTypes.string.isRequired,
}

export default App
