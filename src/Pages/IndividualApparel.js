import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class IndividualApparel extends Component {

    static propTypes = {
        apparel: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <h3>Wow</h3>
            </div>
        )
    }
}