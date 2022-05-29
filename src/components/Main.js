import React from 'react';
import greetings from '../images/greetings.png';
import link from '../images/link.png';
import './main.css';
import { useState } from 'react';
import Projects from './Projects';
import APIBody from './API Fetch/APIBody';
import About from '../components/About/About.js'
import { scroller } from "react-scroll";


const Main = () => {
    const [whatToRender,setWhatToRender] = useState("")
    const reRenderElement = (val) => {
        if (val === 0){
            setWhatToRender(<div><About /></div>)
            scrollToSection("jump-head");
        } else if (val === 1){
            setWhatToRender(<div><Projects /></div>)
            scrollToSection("jump-head");
        } else if (val === 2){
            setWhatToRender(<div><APIBody /></div>)
            scrollToSection("jump-head");
            
        }
      
      
        
    }

    const scrollToSection = (val) => {
        scroller.scrollTo(val, {
            duration: 800,
            delay:0,
            smoth: "easeInOutQuart"
        });
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg'>
                        <img src={greetings} className="greet-image" alt="Me at a computer desk."></img>
                    </div>
                    <div className='col-lg'>
                        <h1 className='header font-indie'>Junior Software Developer</h1>
                        <p className='greetings'>I am a junior developer seeking an entry level role in web or application development. I am constantly working to improve my skills.</p>
                        <h3 className='font-indie'>Current Experience (out of 5)</h3>
                        <table className='table table-sm push-down'>
                            <tbody>
                                <tr>
                                    <td className='job-skills-text'>HTML/CSS (18 months)</td>
                                    <td>⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td className='job-skills-text'>JavaScript (18 months)</td>
                                    <td>⭐⭐⭐</td>
                                </tr>
                                <tr>
                                    <td className='job-skills-text'>React/JSX (10 months)</td>
                                    <td>⭐⭐</td>
                                </tr>
                                <tr>
                                    <td className='job-skills-text'>Java (3 months) </td>
                                    <td>⭐⭐</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg'>
                    <nav className="nav flex-lg-column">
                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(0))}>About <img src={link} className='sixfour'/></a>
                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(1))}>Projects <img src={link} className='sixfour'/></a>
                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(2))}>API <img src={link} className='sixfour'/></a>

                    </nav>
                    </div>
                </div>
            </div>
            <div>{whatToRender}</div>

                    
        </div>
        
          
                
                
               
        
    )
}


export default Main;




