import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class ComingSoon extends Component {
    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <h2>Coming Soon!</h2>
            </div>
      );
    }
}