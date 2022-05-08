import React from "react";
import './about.css'
import greetings2 from '../images/greetings2.jpg';
import wordicon from '../images/wordicon.png';
import githubicon from '../images/githubicon.png';
import gameicon from '../images/gameicon.png';

const About = () => {
    return (
        <div>
            <div>
                
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div><img src={wordicon} className="link-img"/><a href="https://www.linkedin.com/in/michaelpmiller89/" className="link-text" target="_blank">LinkedIn</a></div>
                        <div><img src={githubicon} className="link-img"/><a href="https://github.com/mmiller89" className="link-text" target="_blank">GitHub</a></div>
                        <div><img src={wordicon} className="link-img"/><a href="https://www.untapped.io/" className="link-text" target="_blank">Untapped</a></div>
                        <div><img src={gameicon} className="link-img"/><a href="https://reinarc.itch.io/sempiternal" className="link-text" target="_blank">Sempiternal</a></div>
                    </div>
                    <div className="col-4">
                    <h1><center>About Me</center></h1>
                    <p className="over">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="col-4">
                        <img src={greetings2} className="grad-pic" alt="Graduation Picture"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;