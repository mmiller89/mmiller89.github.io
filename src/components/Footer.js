import React from 'react';
import './footer.css'

const Footer = () => {
    let date = new Date();
    return (
        
        <div className='footer font-indie'>
            <div className='date'>
                Today's Date: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}
            </div>
            <div>Dave Gandy - Flaticon https://www.flaticon.com/free-icons/external</div>
            <div>Weather Graphics - https://giphy.com/channel/Kitteascosmos</div>
            
           
            
            </div>
    )
}

export default Footer;