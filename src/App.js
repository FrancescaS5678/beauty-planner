import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Pages/Categories'
import AddFilter from './Pages/AddFilter'
import AddApparel from './Pages/AddApparel'
import AllApparel from './Pages/AllApparel'
import TopsFilter from './Pages/TopsFilter'
import BottomsFilter from './Pages/BottomsFilter'
import ShoesFilter from './Pages/ShoesFilter'
import Colors from './Pages/Colors'
import ComingSoon from './Pages/ComingSoon'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/addfilter" component={AddFilter} />
            <Route path="/addapparel" component={AddApparel} />
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
