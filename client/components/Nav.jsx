import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'


class Nav extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
        </div>

      </Router>
    )
  }
}

export default Nav