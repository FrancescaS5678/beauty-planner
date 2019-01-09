import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AllApparel extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         file: null
    //     }
    //     this.selectImage = this.selectImage.bind(this)
    // }

    state = {
        file: null
    }

    selectImage = (event) => {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
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
                        <select name="apparel">
                            <option value="tops">Tops</option>
                            <option value="tottoms">Bottoms</option>
                            <option value="thoes">Shoes</option>
                        </select>
                        <h4><u>Tags</u></h4>
                        <input type="text"></input><br />
                        <button type="submit" id="apparelSave">Save</button>
                    </form>
                </section>
            </div>
        );
    }
}