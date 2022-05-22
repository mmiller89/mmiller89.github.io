import React from 'react';
import mainicon from '../images/mainicon.png';
import './header.css'

const Header = () => {
    return (
        <div className='radiant-1'>
            <div>
                <img src={mainicon} className="main" alt="Title Logo" width="300px" height="300px"></img>
            </div>
            
        </div>
        
    )
}

export default Header;