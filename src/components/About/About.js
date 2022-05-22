import React from "react";
import './about.css'
import greetings2 from '../../images/greetings2.jpg';
import wordicon from '../../images/wordicon.png';
import githubicon from '../../images/githubicon.png';
import gameicon from '../../images/gameicon.png';
import untapped from '../../images/untapped.png';

const About = () => { 
    return (
        <div>
            <div>
                
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-4">
                        <div className="d-lg-inline-flex"><a href="https://www.linkedin.com/in/michaelpmiller89/" className="link-text" target="_blank" rel="noreferrer"><img src={wordicon} className="link-img" alt="LinkedIn"/></a></div>
                        <div className="d-lg-inline-flex"><a href="https://github.com/mmiller89" className="link-text" target="_blank" rel="noreferrer"><img src={githubicon} className="link-img" alt="GitHub"/></a></div>
                        <div className="d-lg-inline-flex"><a href="https://www.untapped.io/" className="link-text" target="_blank" rel="noreferrer"><img src={untapped} className="link-img" alt="Untapped"/></a></div>
                        <div className="d-lg-inline-flex"><a href="https://reinarc.itch.io/sempiternal" className="link-text" target="_blank" rel="noreferrer"><img src={gameicon} className="link-img" alt="Sempiternal"/></a></div>
                    </div>
                    <div className="col-lg-4 col-8">
                    <h1 className="jump-head"><center>About Me</center></h1>
                    <p className="over">I'm a motivated professional who is always looking to increase my skillset. Since starting to learn programming less than a year ago, I've managed to get a grasp on front-end web technologies like HTML/CSS/JavaScript and React, and am eager to learn more. I'd love to become a full stack developer one day. <br /><br />I enjoy lifting weights and feeling strong. Some other hobbies I have are video games (playing and creating) and traveling. My favorite memories are my years living in Germany and exploring Europe. <br /><br />Ich spreche Deutsch/Hablo español.</p>
                    </div>
                    <div className="col-lg-4 col-0 d-none d-sm-block">
                        <img src={greetings2} className="grad-pic" alt="Graduation"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default About;