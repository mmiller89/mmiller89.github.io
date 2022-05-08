import React from 'react';
import greetings from '../images/greetings.png';
import './main.css';
import { useState } from 'react';
import Boggle from './Boggle/Boggle';
import APIBody from './API Fetch/APIBody';
import Contact from './Contact';
import About from './About'


const Main = () => {
    const [whatToRender,setWhatToRender] = useState("")
    const reRenderElement = (val) => {
        if (val === 0){
            setWhatToRender(<div><About /></div>)
        } else if (val === 1){
            setWhatToRender(<div><Boggle /></div>)
            
        } else if (val === 2){
            setWhatToRender(<div><APIBody/></div>)
        } else if (val === 3){
            setWhatToRender(<div><Contact/></div>)
        }
      
        
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm'>
                        <img src={greetings} className="greet-image"></img>
                    </div>
                    <div className='col-sm'>
                        <h1 className='header'>Junior Software Developer</h1>
                        <p className='greetings'>I am a Web Developer and Software Engineer in training. Seeking opportunities to grow!</p>
                        <p className='greetings'><em>Current Goal:</em>Finish Bootcamp (Java/MySQL/Databases) and secure an internship/junior role.</p>
                    </div>
                    <div className='col-sm'>
                    <nav class="nav flex-md-column">
                        <a class="nav-link" href="#!" onClick={() => (reRenderElement(0))}>About</a>
                        <a class="nav-link" href="#!" onClick={() => (reRenderElement(1))}>Boggle</a>
                        <a class="nav-link" href="#!" onClick={() => (reRenderElement(2))}>API</a>
                        <a class="nav-link" href="#!" onClick={() => (reRenderElement(3))}>Contact</a>
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