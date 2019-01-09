import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AllApparel extends Component {
    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
                <section>
                    <button>Add Image</button>
                </section>
            </div>
      );
    }
}