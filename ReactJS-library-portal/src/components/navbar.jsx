import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="navbar-brand">
                            <Link to='/'>Home</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link to='/add'>Add Book</Link>
                        </div>

                        <div className="navbar-text ml-5 pl-5">
                            <i>Welcome to college library</i>
                        </div>
                    </nav>
                </div>
            </div >
        )
    }
}

export default Navbar;