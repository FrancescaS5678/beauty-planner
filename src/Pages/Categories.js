import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'
import CategoryRender from './CategoryRender'

export default class Categories extends Component {

    state = {
        categoriesList: []
    }

    componentDidMount = async () => {
        try {
            const res = await fetch('https://vast-meadow-37764.herokuapp.com/categories')
            const categoriesList = await res.json()
            this.setState({ categoriesList })
        } catch (err) {
            throw new Error(err)
        }
    }

    renderCategory = () => {
        return this.state.categoriesList.map((category) => {
            return <CategoryRender name={category.name} url={category.name} key={category._id} />
        })
    }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <div className="category">
                    <h3><Link to='/addfilter'>+</Link></h3>
                    <h3><Link to='/apparel/all'>All</Link></h3>
                    {this.renderCategory()}
                </div>
            </div>
        )
    }
}