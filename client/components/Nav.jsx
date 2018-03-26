import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Home from './Home'
import WordList from './WordList'
import DailyWord from './DailyWord'


class Nav extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/daily-word' component={DailyWord} />
          <Route path='/word-list' component={WordList} />
        </div>

      </Router>
    )
  }
}

export default Nav