import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand">
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="navbar-nav">
                        <Link to='/add'>Add Book</Link>
                    </div>

                    <div className="navbar-text ml-5 pl-5" style={{ backgroundColor: "none" }}>
                        <i>Welcome to {props.name} library</i>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Navbar;