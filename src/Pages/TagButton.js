import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TagButton extends Component {

    static propTypes = {
        tagName: PropTypes.string.isRequired,
        selectHandler: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="tagButton" onClick={this.props.selectHandler}>{this.props.tagName}</div>
        )
    }

}