import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Categories from './Pages/Categories'
import AddFilter from './Pages/AddFilter'
import AddApparel from './Pages/AddApparel'
import AllApparel from './Pages/AllApparel'
import ComingSoon from './Pages/ComingSoon'
import CategoryPageRender from './Pages/CategoryPageRender'
import './App.css'

export default class App extends Component {

  state = {
    categories: []
  }

  componentDidMount = async () => {
    try {
      let res = await fetch('https://vast-meadow-37764.herokuapp.com/categories')
      let categories = await res.json()
      this.setState({ categories })
    } catch (err) {
      throw new Error(err)
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/addfilter" component={AddFilter} />
            <Route path="/addapparel" component={AddApparel} />
            <Route path="/all" component={AllApparel} />
            {
              this.state.categories.map((category) => {
                return <Route path={`/${category.name}`} component={CategoryPageRender} key={category._id} />
              })
            }
          </Switch>
        </div>
      </Router>
    );
  }
}
