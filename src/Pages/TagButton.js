import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TagButton extends Component {

    static propTypes = {
        tagName: PropTypes.string.isRequired
    }

    render() {
        return (
            <button>{this.props.tagName}</button>
        )
    }

}