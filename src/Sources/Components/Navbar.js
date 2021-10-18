import React from 'react';
import '../css/Navbar.css';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
    <>
    <div className="container">
        <nav className="navbar my-2 br-1 sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Cracks-Calc</Link>
        </div>
        </nav>    
    </div>
    </>
    )
}
