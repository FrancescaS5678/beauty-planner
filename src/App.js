import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import AddFilter from './AddFilter'
import AllApparel from './AllApparel'
import ComingSoon from './ComingSoon'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/addfilter" component={AddFilter} />
            <Route path="/apparel/all" component={AllApparel} />
          </Switch>
        </div>
      </Router>
    );
  }
}
