import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'
import UniqueCategory from './UniqueCategory'

export default class CategoryPageRender extends Component {

    

    state = {
        categories: [],
        categoryName: "", 
        categoryTags: []
    }

    componentDidMount = async () => {
        try {
            let res = await fetch('https://vast-meadow-37764.herokuapp.com/categories')
            let categories = await res.json()
            this.setState({ categories })
        } catch (err) {
            throw new Error (err)
        }
        this.state.categories.forEach((category) => {
            if (this.props.location.pathname.includes(category.name)) {
                this.setState({
                    categoryName: category.name,
                    categoryTags: category.selectedTags
                })
            }
        })
    }

    renderCategoryApparel = () => {
        return <UniqueCategory name={this.state.categoryName} tags={this.state.categoryTags} />
    }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
                {this.renderCategoryApparel()}
            </div>
        )
    }
}