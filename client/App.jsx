import React from 'react'
import Home from './components/Home'
import Nav from './components/Nav'


class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title">Te Reo Maori Word of the Day</h1>
          <Nav />
        </div>
      </div>
    )
  }
}

export default App