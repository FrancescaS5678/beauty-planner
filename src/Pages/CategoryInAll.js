import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class CategoryInAll extends Component {

    static propTypes = {
        categoryName: PropTypes.string.isRequired
    }

    render() {
        return (
            <div>
                <h5><u>{this.props.categoryName}</u></h5>
                <section>
                    <h3><Link to='/addapparel'>+</Link></h3>
                </section>
            </div>
        )
    }
}