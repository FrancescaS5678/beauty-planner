import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SiteNav from './SiteNav'

export default class AddFilter extends Component {

    static propTypes = {
        categories: PropTypes.array,
        allTags: PropTypes.array
    }

    // renderTagButtons = () => {
    //     for (let i = 0; i < this.props.allTags.length; i++) {
    //         return <button>{this.props.allTags[i]}</button>
    //     }
    // }

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
                            {/* {this.renderTagButtons()} */}
                        </div>
                    </section>
                    <button type="submit">Save</button>
                </form>
            </div>
      );
    }
}