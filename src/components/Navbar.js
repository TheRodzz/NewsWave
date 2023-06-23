import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export class Navbar extends Component {
    static propTypes = {

    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/General">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Technology">Technology</Link>
                            </li>
                        </ul>       
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
