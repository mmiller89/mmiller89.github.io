import React from 'react';
import './boggle.css'
import { useState } from 'react';
import dictionaryArray from './dictionary.js';
import useSound from 'use-sound';
import success from '../../audio/success.wav';
import wrong from '../../audio/wrong.mp3';
import touch from '../../audio/clickCell.mp3';
import miss from '../../audio/miss.wav';
import music from '../../audio/gamemusic.ogg';
import ReactAudioPlayer from 'react-audio-player';



//UPDATE 5/31
//Eliminated 30+ lines of code by grouping dozens of useStates into arrays and using array methods.

/**
 * DEMONSTRATED SKILLS
 * -----
 * React useState, audioPlayer
 * Array, Object manipulation (map, forEach etc)
 * ... syntax
 * Terniary operators
 * JSX/React syntax
 * Bootstrap (col, row, className, etc)
 * Dynamic window sizing
 */

//TO-DO
//Find a more reliable/accurate dictionary for word check.
//Using Node.js, implement some sort of score saving mechanism to keep track of highest score.

var letterTracker = []
var correctWordsArray = [];
var score_points = 0;



const Boggle = () => {
    let currentBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let letters = [
            ["R","I","F","O","B","X"],
            ["I","F","E","H","E","Y"],
            ["D","E","N","O","W","S"],
            ["U","T","O","K","N","D"],
            ["H","M","S","R","A","O"],
            ["L","U","P","E","T","S"],
            ["A","C","I","T","O","A"],
            ["Y","L","G","K","U","E"],
            ["Q","B","M","J","O","A"],
            ["E","H","I","S","P","N"],
            ["V","E","T","I","G","N"],
            ["B","A","L","I","Y","T"],
            ["E","Z","A","V","N","D"],
            ["R","A","L","E","S","C"],
            ["U","W","I","L","R","G"],
            ["P","A","C","E","M","D"]
    ]
    const [slotColor, setSlotColor] = useState(["","","","","","","","","","","","","","","",""])

    const [correctCol, setCorrectCol] = useState([
        {
            text: "", 
            color: ""
        }
    ]);
    const [correctWords, setCorrectWords] = useState("");
    const [points, setPoints] = useState(0);
    const [placeHold, setPlaceHold] = useState();
    
    const [slots, setSlots] = useState(["","","","","","","","","","","","","","","",""])
    const [inputValue, setInputValue] = useState("")
    const [PlayButton, setPlayButton] = useState("Play")
    
    const [playCorrect] = useSound(success);
    const [playWrong] = useSound(wrong);
    const [playTouch] = useSound(touch);
    const [playMiss] = useSound(miss);
    const [audioPlayer, setAudioPlayer] = useState();
   
    
    
    const PlayBegin = () => {
        if (window.innerWidth > 800 && window.innerHeight > 600){
            setAudioPlayer(<ReactAudioPlayer src={music} autoPlay loop controls/>)
        }
        
        score_points = 0;
        correctWordsArray = [];
        updateCorrectWords(correctWordsArray);
        setCorrectCol({
            ...correctCol,
            text: 'Good luck!',
            color: 'black'
        })
            var timerMinutes = 60 * 3
            PlayLetters();
            setBoard();
            setPlayButton(timer(timerMinutes))
      
       
    }
    const PlayLetters = () => {
        for (let i=0; i <= 15; i++){
            let newLetter = letters[i]
            currentBoard[i] = newLetter[Math.floor(Math.random() * newLetter.length)];
        }
    }
    const setBoard = () => {
            for (let i=0; i <= slots.length - 1; i++){
                setSlots(currentBoard)
            }
            resetColors();
            
    }

    const resetColors = () => {
          setSlotColor(["","","","","","","","","","","","","","","",""])
    }

    const assignColor = (slotClicked, color) => {
        let array = [...slotColor]
        array[slotClicked] = color;
        setSlotColor(array);
    }

    const timer = (duration, gameStarted) => {
        var timer = duration, minutes, seconds;
        let timerCount = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            setPlayButton(minutes + ":" + seconds)
    
            if (--timer < 0) {
                currentBoard.forEach((element, index) => currentBoard[index] = "")
                setBoard();
                resetColors();
                timer = duration;
                clearInterval(timerCount)
                setAudioPlayer();
                score_points = 0;
                setPoints(0);
                setInputValue("")
                setPlayButton("Play")
                correctWordsArray = [];
                updateCorrectWords(correctWordsArray);
               
            }
        }, 1000);
    }

    const letterCheck = (slotVal) => {
        
        if (inputValue === ""){
            setInputValue(slotVal)
            
        } else {
            setInputValue(inputValue + slotVal)
            
        }  

        
        
        
    }

    const tdColorCheck = (slotVal, slotClicked) => {
        
        letterTracker.push(slotClicked);
        
        let validConnection = isCorrectWord(slotClicked);
        PlayButton !== "Play" && validConnection === true ? assignColor(slotClicked, 'green') : assignColor(slotClicked, '')

        if (validConnection === true){
            playTouch();
            letterCheck(slotVal);
            
        } else {
            playMiss();
            letterTracker.pop();
        }
        
    }

    const clearWord = () => {
        if (inputValue !== ""){
            playMiss();
        }
        
        setInputValue("")
        resetColors();
    }

    const checkWord = () => {
        if (correctWordsArray.includes(inputValue) === true){
            playWrong();
            setCorrectCol({
                ...correctCol,
                text: 'Already Used!',
                color: 'red'
            })
        } else if (PlayButton !== "Play" && dictionaryArray.includes(inputValue.toLowerCase()) ){
          playCorrect();
          setCorrectCol({
              ...correctCol,
              text: 'Correct!',
              color: 'green'
          })
          determinePoints(inputValue);
          setPoints(points + score_points);
          correctWordsArray.push(inputValue)
          console.log(correctWordsArray);
          updateCorrectWords(correctWordsArray);
          
            
        } else {
            playWrong();
            setCorrectCol({
                ...correctCol,
                text: 'Wrong!',
                color: 'red'
            })
            
        }
        
        setInputValue("")
        resetColors()

    }
    
    const isCorrectWord = (slotClicked) => {
        const validConnections = [
            [1, 4, 5], //index 0
            [0, 4, 5, 6, 2], //index 1
            [1, 3, 5, 6, 7], //index 2
            [2, 6, 7], //index 3
            [0, 1, 5, 8, 9], //index 4
            [0, 1, 2, 4, 8, 9, 10, 6], //index 5
            [1, 2, 3, 5, 9, 10, 11, 7], //index 6
            [2, 3, 6, 11, 10], //index 7
            [9, 4, 5, 12, 13], //index 8
            [6, 4, 5,8,10,12,13, 14], //index 9
            [5, 6, 7,9,11,13,14,15], //index 10
            [6, 7, 10,14,15], //index 11
            [8, 9, 13], //index 12
            [8, 9, 10,12,14], //index 13
            [9, 10, 11,13,15], //index 14
            [10, 11, 14] //index 15
        ]
        if (inputValue === ""){
            return true;
        }
        
        if (validConnections[slotClicked].includes(letterTracker[letterTracker.length-2])){
            return true;
        } 
        
        return false;

       
       
    }

    const determinePoints = (word) => {
        score_points = 0;
            if (word.length <= 4){
                score_points += 1;
            } else if (word.length === 5){
                score_points += 2;
            } else if (word.length === 6){
                score_points += 3;
            } else if (word.length === 7){
                score_points += 5;
            } else {
                score_points += 11;
            }
            
          
        }
        
    

    const updateCorrectWords = (array) => {
        setCorrectWords(array.map(val => <div>{val}</div>))
    }

    
    

    return (
        <div>
            <div className='container-fluid background-img'>
                <center>
                       <h1 className="jump-head font-indie">Boggle</h1>
                        <div>Form words with connected letters.</div>
                        <div className="input" style={{ color: `${correctCol.color}` }}>{correctCol.text} | Points: {points}</div>
                        <div className="card">
                            <div className='card-body input'>
                            🤓{inputValue}
                            </div>
                            
                        </div>
                        <button type="button" className="btn btn-lg btn-success" onClick={() => {
                            if (PlayButton === "Play"){
                                PlayBegin();
                            }
                        } }><span className="start-button controls">{PlayButton}</span></button>
                        <button type="button" className="btn btn-lg btn-success controls" onClick={checkWord}><span className="start-button">Check</span></button>
                        <button type="button" className="btn btn-lg btn-success controls" onClick={clearWord}><span className="start-button">Clear</span></button>
                        
                        </center> 
                <div className='row'>
                    <div className='col-9'>
                    
                        <table className="table table-light table-bordered game">
                            <tbody>
                                <tr>
                                    <td className='td-game' style={{ backgroundColor: `${slotColor[0]}` }} onClick={() => tdColorCheck(slots[0], 0, inputValue)}><div>{slots[0]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[1]}`}} onClick={() => tdColorCheck(slots[1], 1, inputValue)}><div>{slots[1]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[2]}`}} onClick={() => tdColorCheck(slots[2], 2, inputValue)}><div>{slots[2]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[3]}`}} onClick={() => tdColorCheck(slots[3], 3, inputValue)}><div>{slots[3]}</div></td>
                                </tr>
                                <tr>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[4]}`}} onClick={() => tdColorCheck(slots[4], 4, inputValue)}><div>{slots[4]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[5]}`}} onClick={() => tdColorCheck(slots[5], 5, inputValue)}><div>{slots[5]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[6]}`}} onClick={() => tdColorCheck(slots[6], 6, inputValue)}><div>{slots[6]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[7]}`}} onClick={() => tdColorCheck(slots[7], 7, inputValue)}><div>{slots[7]}</div></td>
                                </tr>
                                <tr>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[8]}`}} onClick={() => tdColorCheck(slots[8], 8, inputValue)}><div>{slots[8]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[9]}`}} onClick={() => tdColorCheck(slots[9], 9, inputValue)}><div>{slots[9]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[10]}`}} onClick={() => tdColorCheck(slots[10], 10, inputValue)}><div>{slots[10]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[11]}`}} onClick={() => tdColorCheck(slots[11], 11, inputValue)}><div>{slots[11]}</div></td>
                                </tr>                        
                                                            
                                                            
                                <tr>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[12]}`}} onClick={() => tdColorCheck(slots[12], 12, inputValue)}><div>{slots[12]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[13]}`}} onClick={() => tdColorCheck(slots[13], 13, inputValue)}><div>{slots[13]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[14]}`}} onClick={() => tdColorCheck(slots[14], 14, inputValue)}><div>{slots[14]}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${slotColor[15]}`}} onClick={() => tdColorCheck(slots[15], 15, inputValue)}><div>{slots[15]}</div></td>
                                </tr> 
                            </tbody>
                        </table>
                        
                    </div>
                    <div className='col-3'>
                        <h1 className='font-indie word-title'>Word Bank</h1>
                        <p className='word-bank'>{correctWords}</p>
                    </div>
                </div>
                <div>
                <center>{audioPlayer}</center>
                </div>

                
            </div>
            
            
        </div>
    )

}



export default Boggle;