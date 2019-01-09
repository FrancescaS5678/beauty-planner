import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AllApparel extends Component {
    state = {
        file: null,
        savedApparel: {
            image: null,
            category: null,
            tags: null
        }
    }

    static propTypes = {
        apparelList: PropTypes.array.isRequired
    }

    selectImage = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            savedApparel: {
                image: URL.createObjectURL(event.target.files[0]),
                tags: null
            },
        })
    }

    tagsSaved = (e) => {
        this.setState({
            savedApparel: {
                tags: e.target.value
            }
        })
    }

    saveApparel = () => {
        this.props.apparelList.push(this.state.savedApparel)
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
                    <img src={this.state.file} />
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