import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'


class Nav extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-md navbar-light bg-light navBar textColourNav">
            <Link to='/' className="navbar-brand"><i className="fas fa-home faFaFont"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>

          <Route exact path='/' component={Home} />
      

        </div>

      </Router>
    )
  }
}

export default Nav