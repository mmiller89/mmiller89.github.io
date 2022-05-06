import React from 'react';
import Boggle from '../components/Boggle/Boggle.js'
import './features.css'



const Features = () => {
    return (
        <div>
            <h1 className="centered">ReactJS Boggle</h1>
            <h3><strong>Directions</strong>: Click on Shuffle to begin. Click the letter squares to form a word.</h3>
            <h3>Each letter must be connected for the word to count.</h3>
            <h3>Note: The game is not functional yet. I am just testing the styling.</h3>
            <Boggle />
        </div>
    )
}

export default Features;