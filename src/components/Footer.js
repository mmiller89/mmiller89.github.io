import React from 'react';
import './footer.css'

const Footer = () => {
    let date = new Date();
    return (
        
        <div className='footer'><center>Today's Date: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}</center> </div>
    )
}

export default Footer;