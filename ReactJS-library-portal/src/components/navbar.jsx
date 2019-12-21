import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className="row">
            <div className="col">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">
                        <Link to='/home'>Home</Link>
                    </div>
                    <div className="navbar-item mr-4">
                        <Link to='/add'>Add Book</Link>
                    </div>
                    <div className="navbar-item m-4">
                        <Link to='/login'>Login</Link>
                    </div>
                    <div className="navbar-item m-4">
                        <Link to='/signup'>Signup</Link>
                    </div>
                </nav>
            </div>
        </div >
    )
}

export default Navbar;