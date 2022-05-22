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
                    <div className='col-lg'>
                        <img src={greetings} className="greet-image" alt="Me at a computer desk."></img>
                    </div>
                    <div className='col-lg'>
                        <h1 className='header'>Junior Software Developer</h1>
                        <p className='greetings'>I am a junior developer seeking an entry level role in web or application development. I am constantly working to improve my skills.</p>
                        <center> <p className='greetings'>Current Experience (out of 5)</p>
                        <p className='greetings'>HTML/CSS (18 months) ⭐⭐⭐</p> 
                        <p className='greetings'>JavaScript (18 months) ⭐⭐⭐ </p>
                        <p className='greetings'>React/JSX (10 months) ⭐⭐ </p>
                        <p className='greetings push-down'>Java (3 months) ⭐⭐ </p></center>
                    </div>
                    <div className='col-lg'>
                    <nav className="nav flex-lg-column">
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




