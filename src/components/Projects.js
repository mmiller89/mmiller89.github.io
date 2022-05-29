import React from 'react';
import Boggle from './Boggle/Boggle';
import LessonPlans from './LessonPlans/LessonPlans.js'
import './projects.css'


const Projects = () => {
    return (
        <div className='jump-head'>
                <div className='project'><Boggle /></div>
                <div className='project'><LessonPlans /></div>
        </div>
    )
}



export default Projects;