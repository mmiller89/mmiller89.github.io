import React from 'react';
import Boggle from './Boggle/Boggle';
import Calculator from './Calculator/Calculator.js';


const Projects = () => {
    return (
        <div className='container-fluid jump-head'>
            <div className='row'>
                <Boggle />
            </div>
            <div className='row'>
                <Calculator />
            </div>
        </div>
    )
}



export default Projects;