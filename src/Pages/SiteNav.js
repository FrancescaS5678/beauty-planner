import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SiteNav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Apparel</Link></li>
                    <li><Link to="/ComingSoon">Accessories</Link></li>
                    <li><Link to="/ComingSoon">Makeup</Link></li>
                    <li><Link to="/ComingSoon">Outfits</Link></li>
                </ul>
            </div>
      );
    }
}