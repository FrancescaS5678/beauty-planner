import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AllApparel extends Component {
    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <h2>Some day you will be able to add apparel here</h2>
            </div>
      );
    }
}