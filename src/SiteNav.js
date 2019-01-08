import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SiteNav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><h2><Link to="/">Apparel</Link></h2></li>
                    <li><h2>Accessories</h2></li>
                    <li><h2>Makeup</h2></li>
                    <li><h2>Outfits</h2></li>
                </ul>
            </div>
      );
    }
}