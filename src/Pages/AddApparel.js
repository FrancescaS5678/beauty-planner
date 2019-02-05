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
        tagList: []
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
            tagList: this.state.savedApparel.tags.split(",")
        })
        try {
            let res = await fetch('http://localhost:4001/tags', {
                method: 'PUT',
                body: JSON.stringify({
                    tagList: this.state.tagList
                }),
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
                        <Link to="/apparel/all"><button type="submit" id="apparelSave" onClick={this.saveApparel}>Save</button></Link>
                    </form>
                </section>
            </div>
        );
    }
}