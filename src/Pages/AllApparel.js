import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'
import CategoryinAll from './CategoryInAll'

export default class AllApparel extends Component {

    state = {
        categories: [],
        categoryNames: []
    }

    componentDidMount = async () => {
        try {
            let res = await fetch('http://localhost:4001/categories')
            let categories = await res.json()
            this.setState({ categories })
            console.log("Success", this.state.categories)
        } catch (err) {
            throw new Error(err)
        }
    }

    renderCategories = () => {

    }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
            </div>
        );
    }
}