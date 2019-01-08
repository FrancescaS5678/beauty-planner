import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'
import FilterCategory from './FilterCategory'

export default class Categories extends Component {
    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <FilterCategory />
            </div>
      );
    }
}