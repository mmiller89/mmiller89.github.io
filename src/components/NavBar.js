import React from 'react';
import Boggle from './Boggle/Boggle';
import APIBody from './API Fetch/APIBody';
import Contact from './Contact';
import About from './About';
import { useState } from 'react';
import './navbar.css';

const NavBar = () => {
    const [whatToRender,setWhatToRender] = useState("")
    const reRenderElement = (val) => {
        if (val === 0){
            setWhatToRender(<div><About /></div>)
        } else if (val === 1){
            setWhatToRender(<div><Boggle /></div>)
            
        } else if (val === 2){
            setWhatToRender(<div><APIBody /></div>)
        } else if (val === 3){
            setWhatToRender(<div><Contact /></div>)
        }
        setTimeout(() => {
            window.scrollTo(0,800);
        }, 500);
        
    }
   
        
    return (
        <div>
              <nav className="navbar navbar-expand">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(0))}>Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(1))}>Boggle</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(2))}>API</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!" onClick={() => (reRenderElement(3))}>Contact</a>
                                    </li>
                                    </ul>
                                </div>
                                </nav>

                                
                                <div className='centered'>
                                    {whatToRender}
                                </div>   
                                
        </div>
    )
}

export default NavBar;
