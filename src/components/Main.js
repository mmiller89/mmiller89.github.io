import React from 'react';
import greetings from '../images/greetings.png';
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
                    <div className='col-sm'>
                        <img src={greetings} className="greet-image" alt="Me at a computer desk."></img>
                    </div>
                    <div className='col-sm'>
                        <h1 className='header'>Junior Software Developer</h1>
                        <p className='greetings'>I am a Web Developer and Software Engineer in training. Seeking opportunities to grow!</p>
                        <p className='greetings'>My current goal is to finish Bootcamp (Java/MySQL/Databases) at Promineo Tech and secure an internship/junior role.</p>
                    </div>
                    <div className='col-sm'>
                    <nav className="nav flex-xl-column">
                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(0))}>About</a>
                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(1))}>Projects</a>
                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(2))}>API</a>

                    </nav>
                    </div>
                </div>
            </div>
            <div>{whatToRender}</div>

                    
        </div>
        
          
                
                
               
        
    )
}


export default Main;




// <div className="col-sm">
//    <img src={wordicon} className="CV" alt="Word Icon" height="50px" width="50px"></img><a href="https://docs.google.com/document/d/1YI24RKJT3IPsYN4XjBSRqOGW94YCF0bdYp2EsjJawYg/edit?usp=sharing">Resume</a>
//    <div className="col-sm">
//     <img src={wordicon} className="CV" alt="Word Icon" height="50px" width="50px"></img><a href="https://docs.google.com/document/d/17ToKZKT_NZ08ZwUQKwhZpg5xa3tGEi4nLlHoFq94HIY/edit?usp=sharing">Cover Letter</a>
//     </div>