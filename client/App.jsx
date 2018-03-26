import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Te Reo Maori word of the day</h1>
        <Nav />
      </div>
    )
  }
}

export default App