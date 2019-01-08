import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Categories} />
          </Switch>
        </div>
      </Router>
    );
  }
}
