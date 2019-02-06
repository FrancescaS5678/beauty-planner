import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AllApparel extends Component {
    state = {
        file: null,
        savedApparel: {
            image: null,
            tags: null
        },
        tagListArr: [],
        tagList: {}
    }
    
    selectImage = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            savedApparel: {
                image: URL.createObjectURL(event.target.files[0]),
                tags: this.state.savedApparel.tags
            },
        })
    }

    tagsSaved = (e) => {
        this.setState({
            savedApparel: {
                tags: e.target.value,
                image: this.state.savedApparel.image
            }
        })
    }

    saveApparel = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('http://localhost:4001/apparel', {
                method: 'PUT',
                body: JSON.stringify(this.state.savedApparel),
                headers: { "Content-Type": "application/json" },
                mode: 'cors'
            })
            console.log("Success", JSON.stringify(res))
        } catch (err) {
            return
        }
        this.setState({
            tagListArr: this.state.savedApparel.tags.split(","),
        })
        Object.assign(this.state.tagList, this.state.tagListArr)
        try {
            let res = await fetch('http://localhost:4001/tags', {
                method: 'PUT',
                body: JSON.stringify(this.state.tagList),
                headers: { "Content-Type": "application/json" },
                mode: 'cors'
            })
            console.log("Success", JSON.stringify(res))
        } catch (err) {
            return
        }
    }

    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
                <section>
                    <h4>Add Image</h4>
                    <input type="file" ref="fileUploader" name="addpic" onChange={this.selectImage}></input>
                </section>
                <section id="addApparel">
                    <img src={this.state.file} alt="Your Apparel" />
                    <form>
                        <h4><u>Tags</u></h4>
                        <input type="text" onChange={this.tagsSaved}></input><br />
                        <button type="submit" id="apparelSave" onClick={this.saveApparel}>Save</button>
                    </form>
                </section>
            </div>
        );
    }
}