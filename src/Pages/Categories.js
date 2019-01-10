import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class Categories extends Component {

    static propTypes = {
        categories: Proptypes.array.isrequired
    }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <div className="category">
                    <h3><Link to='/addfilter'>+</Link></h3>
                    <h3><Link to='/apparel/all'>All</Link></h3>
                    <h3><Link to='/apparel/tops'>Tops</Link></h3>
                    <h3><Link to='/apparel/bottoms'>Bottoms</Link></h3>
                    <h3><Link to='/apparel/shoes'>Shoes</Link></h3>
                    <h3><Link to='/apparel/colors'>Colors</Link></h3>
                </div>
            </div>
        );
    }
}