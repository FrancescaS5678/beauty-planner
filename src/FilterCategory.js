import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Categories extends Component {
    render() {
        return (
            <div className="category">
                <h3><Link to='/addfilter'>+</Link></h3>
                <h3><Link to='/apparel/all'>All</Link></h3>
                <h3><Link to='/apparel/tops'>Tops</Link></h3>
                <h3><Link to='/apparel/bottoms'>Bottoms</Link></h3>
                <h3><Link to='/apparel/shoes'>Shoes</Link></h3>
            </div>
        );
    }
}