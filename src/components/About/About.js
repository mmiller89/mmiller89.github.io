import React from "react";
import './about.css'
import greetings2 from '../../images/greetings2.jpg';
import wordicon from '../../images/wordicon.png';
import githubicon from '../../images/githubicon.png';
import hackerrank from '../../images/hackerrank.png';
import resume from '../../images/resume.png';

const About = () => { 
    return (
        <div>
            <div>
                
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-4">
                        
                            <div>
                                <div className="d-lg-inline-flex"><a href="https://www.linkedin.com/in/michaelpmiller89/" className="link-text" target="_blank" rel="noreferrer"><img src={wordicon} className="link-img" alt="LinkedIn"/></a></div>
                                <div className="d-lg-inline-flex"><a href="https://github.com/mmiller89" className="link-text" target="_blank" rel="noreferrer"><img src={githubicon} className="link-img" alt="GitHub"/></a></div>
                            </div>
                            <div>
                                <div className="d-lg-inline-flex"><a href="https://docs.google.com/document/d/1Z7XU4bxd-SF-J5XZ1yNrMgxIydXx9bjOgwT4kw_WoJc/copy" className="link-text" target="_blank" rel="noreferrer"><img src={resume} className="link-img" alt="Resume"/></a></div>
                                <div className="d-lg-inline-flex"><a href="https://www.hackerrank.com/mchlmiller89" className="link-text" target="_blank" rel="noreferrer"><img src={hackerrank} className="link-img" alt="Sempiternal"/></a></div>
                            </div>
                        
                        
                       
                    </div>
                    <div className="col-lg-4 col-8">
                    <h1 className="jump-head font-indie"><center>About Me</center></h1>
                    <p className="over">I'm a motivated professional who is always looking to increase my skills. Since starting my programming journey, I've managed to get a grasp on front-end web technologies like HTML/CSS/JavaScript and React, and am hungry for more. I want to create things that help make life easier for others. <br /><br />I enjoy lifting weights and getting outdoors. Some other hobbies I have are video games (playing and creating) and traveling. My favorite memories are my years living in Germany and exploring Europe. Some of my friends call me Rein based on a video game character I created.<br /><br />Ich spreche Deutsch/Hablo español.</p>
                    <br /><br />
                    <div><strong>Currently Working On</strong></div>
                    <div>
                    <ul>
                        <li>Teacher Lesson Planning App</li>
                        <li>Data Structures and Algorithms (self study)</li>
                        <li>Java Back-End Development Bootcamp</li>
                    </ul>
                    </div> 
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