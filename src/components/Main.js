import React from 'react';
import greetings from '../images/greetings.png';
import NavBar from './NavBar';

import './main.css';

const Main = () => {
    return (
        <div>
            <div className="container-fluid main-sec">
                        <div className="row">
                                <div className="col-sm greet-image">
                                    <img src={greetings} className="greet-image" alt="Me"></img>
                                </div>
                                <div className="col-sm">
                                    <p className="greetings">My name is Michael, and I'm a Web Developer and Software Engineer in training! I enjoy long walks with my dog and lifting heavy things.</p>
                                    <NavBar />
                                </div>
                                <div className="col-sm greetings quote">
                                    <p><em>Never let the fear of striking out keep you from playing the game.</em></p>
                                    <p> -Babe Ruth</p>
                                </div>
                                
                                
                            
                        </div>
                    </div>
                    
        </div>
        
          
                
                
               
        
    )
}


export default Main;




// <div className="col-sm">
//    <img src={wordicon} className="CV" alt="Word Icon" height="50px" width="50px"></img><a href="https://docs.google.com/document/d/1YI24RKJT3IPsYN4XjBSRqOGW94YCF0bdYp2EsjJawYg/edit?usp=sharing">Resume</a>
//    <div className="col-sm">
//     <img src={wordicon} className="CV" alt="Word Icon" height="50px" width="50px"></img><a href="https://docs.google.com/document/d/17ToKZKT_NZ08ZwUQKwhZpg5xa3tGEi4nLlHoFq94HIY/edit?usp=sharing">Cover Letter</a>
//     </div>