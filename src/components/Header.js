import React from 'react';
import mainicon from '../images/mainicon.png';
import './header.css'

const Header = () => {
    return (
        <div className = "container-fluid header">
            <img src={mainicon} className="main" alt="Title Logo" width="300px" height="300px"></img>
            <h1>Software Developer</h1>
        </div>
    )
}

export default Header;