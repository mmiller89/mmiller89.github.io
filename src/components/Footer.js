import React from 'react';
import './footer.css'

const Footer = () => {
    let date = new Date();
    return (
        
        <div className='footer font-indie'>
            <div className='date'>
                Today's Date: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </div>
            <div>
           
            <div><a href="https://www.flaticon.com/free-icons/external" title="external icons">External icons created by Dave Gandy - Flaticon</a></div>
            <div><a href="https://www.flaticon.com/free-animated-icons/sun" title="sun animated icons">Animated icons created by Freepik - Flaticon</a></div>
            </div>
           
            
            </div>
    )
}

export default Footer;