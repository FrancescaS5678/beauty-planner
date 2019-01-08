import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Categories'
import AddFilter from './AddFilter'
import AllApparel from './AllApparel'
import TopsFilter from './TopsFilter'
import BottomsFilter from './BottomsFilter'
import ShoesFilter from './ShoesFilter'
import Colors from './Colors'
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
            <Route path="/apparel/tops" component={TopsFilter} />
            <Route path="/apparel/bottoms" component={BottomsFilter} />
            <Route path="/apparel/shoes" component={ShoesFilter} />
            <Route path="/apparel/colors" component={Colors} />
          </Switch>
        </div>
      </Router>
    );
  }
}
