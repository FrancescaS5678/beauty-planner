import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class UniqueCategory extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired
    }

    render() {
        return (
            <div>
                <h5><u>{this.props.name}</u></h5>
                <section>
                    <h3><Link to='/addapparel'>+</Link></h3>
                </section>
            </div>
        )
    }
}