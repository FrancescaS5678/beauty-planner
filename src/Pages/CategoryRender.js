import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class CategoryRender extends Component {

    static propTypes = {
        name: PropTypes.string,
        url: PropTypes.string
    }

    render() {
        return (
            <div>
                <div className="category">
                    <h3><Link to={`/${this.props.url}`}>{this.props.name}</Link></h3>
                </div>
            </div>
        )
    }
}