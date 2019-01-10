import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AllApparel extends Component {

    static propTypes = {
        apparelList: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
                <h5><u>Tops</u></h5>
                <section>
                    <h3><Link to='/addapparel'>+</Link></h3>
                </section>
                <h5><u>Bottoms</u></h5>
                <section>
                    <h3><Link to='/addapparel'>+</Link></h3>
                </section>
                <h5><u>Shoes</u></h5>
                <section>
                    <h3><Link to='/addapparel'>+</Link></h3>
                </section>
            </div>
        );
    }
}