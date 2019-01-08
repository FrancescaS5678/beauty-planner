import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AddFilter extends Component {
    render() {
        return (
            <div>
                <header><h1><Link to="/">Beauty Planner</Link></h1></header>
                <SiteNav />
                <Link to="/"><button className="backButton">Back</button></Link>
                <form>
                    <div>
                        <label for='filterName'>Name:</label>
                        <input type="text" name='filterName'></input>
                    </div>
                    <section>
                        <h4><u>Tags</u></h4>
                        <div>
                            <button>+</button>
                            <button>Top</button>
                            <button>Bottom</button>
                            <button>Shoe</button>
                            <button>Red</button>
                            <button>Green</button>
                            <button>Blue</button>
                            <button>Yellow</button>
                            <button>Black</button>
                            <button>White</button>
                        </div>
                    </section>
                    <button type="submit">Save</button>
                </form>
            </div>
      );
    }
}