import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import IndividualApparel from './IndividualApparel';

export default class UniqueCategory extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        tags: PropTypes.array.isRequired
    }

    state = {
        apparelList: [],
        filteredList: []
    }

    componentDidMount = async () => {
        try {   
            let res = await fetch('https://vast-meadow-37764.herokuapp.com/apparel')
            let apparelList = await res.json()
            this.setState({ apparelList })
        } catch (err) {
            throw new Error (err)
        }
    }

    displayApparel = () => {
        this.props.tags.forEach((tag) => {
            this.state.apparelList.forEach((apparel) => {
                apparel.tags.forEach((apparelTag) => {
                    if (apparelTag.trim() === tag.trim()) {
                        this.state.filteredList.push(apparel)
                    }
                })
            })
        })
        return this.state.filteredList.map((apparel) => {
            return <IndividualApparel apparel={apparel} key={apparel._id} />
        }) 
    }

    render() {
        return (
            <div>
                <h5><u>{this.props.name}</u></h5>
                <section>
                    <h3><Link to='/addapparel'>+</Link></h3>
                    {this.displayApparel()}
                </section>
            </div>
        )
    }
}