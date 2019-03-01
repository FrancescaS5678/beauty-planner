import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'
import TagButton from './TagButton'

export default class AddFilter extends Component {

    state = {
        savedTag: null,
        apparelList: [],
        tagList: [],
        newTagList: [],
        newAddedTags: [],
        newCategory: {
            name: null,
            selectedTags: []
        }
    }

    componentDidMount = async () => {
        try {
            let res = await fetch('https://vast-meadow-37764.herokuapp.com/apparel')
            let apparelList = await res.json()
            this.setState({ apparelList })
        } catch (err) {
            throw new Error(err)
        }
    }

    saveCategoryName = (e) => {
        this.setState({
            newCategory: {
                name: e.target.value,
                selectedTags: this.state.newCategory.selectedTags
            }
        })
    }

    selectHandler = (tag) => {
        return () => {
            this.state.newCategory.selectedTags.push(tag)
        }
    }

    createTagList = () => {
        this.state.tagList = []
        this.state.apparelList.forEach((apparel) => {
            apparel.tags.forEach((tag) => {
                this.state.tagList.push(tag)
            })
        })
    }

    renderTagButtons = () => {
        return this.state.tagList.map((tag, i) => {
            return <TagButton tagName={tag} selectHandler={this.selectHandler(tag)} key={i} />
        })
    }

    saveTagName = (e) => {
        this.setState({
            savedTag: e.target.value
        })
    }

    pushNewCategory = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('https://vast-meadow-37764.herokuapp.com/categories', {
                method: 'PUT', 
                body: JSON.stringify(this.state.newCategory),
                headers: { "Content-Type": "application/json" },
                mode: 'cors'
            })
            console.log("Success", JSON.stringify(res))
        } catch (err) {
            throw new Error(err)
        }
        this.setState({
            newCategory: {
                name: null, 
                selectedTags:[]
            }
        })
    }

    // addTag = async () => {
    //     try {
    //         let res = await fetch('http://localhost:4001/tags', {
    //             method: 'PUT',
    //             body: JSON.stringify({
    //                 tag: this.state.savedTag
    //             }),
    //             headers: { "Content-Type": "application/json" },
    //             mode: 'cors'
    //         })
    //         console.log("Success", JSON.stringify(res))
    //     } catch (err) {
    //         throw new Error(err)
    //     } finally {
    //         let res = await fetch('http://localhost:4001/tags', {
    //             method: 'GET',
    //             headers: { "Content-Type": "application/json" },
    //             mode: 'cors'
    //         })
    //         let newTagList = await res.json()
    //         this.setState({ newTagList })
    //     }
    //     this.state.newTagList.forEach((tags) => {
    //         this.state.newAddedTags.push(tags.tag)
    //     })
    //     console.log(this.state.newAddedTags)
    // }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
                <form>
                    <div>
                        <label htmlFor='filterName'>Name:</label>
                        <input type='text' name='filterName' onChange={this.saveCategoryName}></input>
                        <label htmlFor='addTag'>Add Tag:</label>
                        <input type='text' name='addTag'></input>
                        <div className='addTag' onClick={this.addTag}>+</div>
                    </div>
                    <section>
                        <h4><u>Tags</u></h4>
                        <div>
                            {this.createTagList()}
                            {this.renderTagButtons()}
                        </div>
                    </section>
                    <button type="submit" onClick={this.pushNewCategory}>Save</button>
                </form>
            </div>
        );
    }
}