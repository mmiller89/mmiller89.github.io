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



//TO-DOs
//Clicking on the same square uncolors it and removes the letter from the input.
//Add sound effects.
//Add score system: 3/4 letter words - 1 pt, 5 letters - 2 pts, 6 = 3 pts, 7 = 5 pts, 8+ = 11 pts
//Find Boggle word library for dictionary.js 

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

    const [zeroColor, setZeroColor] = useState("")
    const [oneColor, setOneColor] = useState("")
    const [twoColor, setTwoColor] = useState("")
    const [threeColor, setThreeColor] = useState("")
    const [fourColor, setFourColor] = useState("")
    const [fiveColor, setFiveColor] = useState("")
    const [sixColor, setSixColor] = useState("")
    const [sevenColor, setSevenColor] = useState("")
    const [eightColor, setEightColor] = useState("")
    const [nineColor, setNineColor] = useState("")
    const [tenColor, setTenColor] = useState("")
    const [elevenColor, setElevenColor] = useState("")
    const [twelveColor, setTwelveColor] = useState("")
    const [thirteenColor, setThirteenColor] = useState("")
    const [fourteenColor, setFourteenColor] = useState("")
    const [fifteenColor, setFifteenColor] = useState("")
    const [correctCol, setCorrectCol] = useState([
        {
            text: "", 
            color: ""
        }
    ]);
    const [correctWords, setCorrectWords] = useState("");
    const [points, setPoints] = useState(0);
    const [placeHold, setPlaceHold] = useState("");

    const [slots0, setSlots0] = useState("");
    const [slots1, setSlots1] = useState("");
    const [slots2, setSlots2] = useState("");
    const [slots3, setSlots3] = useState("");
    const [slots4, setSlots4] = useState("");
    const [slots5, setSlots5] = useState("");
    const [slots6, setSlots6] = useState("");
    const [slots7, setSlots7] = useState("");
    const [slots8, setSlots8] = useState("");
    const [slots9, setSlots9] = useState("");
    const [slots10, setSlots10] = useState("");
    const [slots11, setSlots11] = useState("");
    const [slots12, setSlots12] = useState("");
    const [slots13, setSlots13] = useState("");
    const [slots14, setSlots14] = useState("");
    const [slots15, setSlots15] = useState("");
    const [inputValue, setInputValue] = useState("")
    const [PlayButton, setPlayButton] = useState("Play")
    
    const [playCorrect] = useSound(success);
    const [playWrong] = useSound(wrong);
    const [playTouch] = useSound(touch);
    const [playMiss] = useSound(miss);
    const [audioPlayer, setAudioPlayer] = useState();
   
    
    
    const PlayBegin = () => {
        setAudioPlayer(<ReactAudioPlayer src={music} autoPlay loop controls/>)
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
            setSlots0(currentBoard[0])
            setSlots1(currentBoard[1])
            setSlots2(currentBoard[2])
            setSlots3(currentBoard[3])
            setSlots4(currentBoard[4])
            setSlots5(currentBoard[5])
            setSlots6(currentBoard[6])
            setSlots7(currentBoard[7])
            setSlots8(currentBoard[8])
            setSlots9(currentBoard[9])
            setSlots10(currentBoard[10])
            setSlots11(currentBoard[11])
            setSlots12(currentBoard[12])
            setSlots13(currentBoard[13])
            setSlots14(currentBoard[14])
            setSlots15(currentBoard[15])
            resetColors();
            
    }

    const resetColors = () => {
            setZeroColor('')
            setOneColor('')
            setTwoColor('')
            setThreeColor('')
            setFourColor('')
            setFiveColor('')
            setSixColor('')
            setSevenColor('')
            setEightColor('')
            setNineColor('')
            setTenColor('')
            setElevenColor('')
            setTwelveColor('')
            setThirteenColor('')
            setFourteenColor('')
            setFifteenColor('')
    }

    const timer = (duration, gameStarted) => {
        var timer = duration, minutes, seconds;
        let timerCount = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            setPlayButton(minutes + ":" + seconds)
    //once timer ends, game is "over" and points are displayed. Press button again to play a new game. High score is tracked.
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
        
        slotClicked === 0 && PlayButton !== "Play" && validConnection === true ? setZeroColor('green') : setPlaceHold('')
        slotClicked === 1 && PlayButton !== "Play" && validConnection === true ? setOneColor('green') :  setPlaceHold('')
        slotClicked === 2 && PlayButton !== "Play" && validConnection === true ? setTwoColor('green') :  setPlaceHold('')
        slotClicked === 3 && PlayButton !== "Play" && validConnection === true ? setThreeColor('green') :  setPlaceHold('')
        slotClicked === 4 && PlayButton !== "Play" && validConnection === true ? setFourColor('green') :  setPlaceHold('')
        slotClicked === 5 && PlayButton !== "Play" && validConnection === true ? setFiveColor('green') :  setPlaceHold('')
        slotClicked === 6 && PlayButton !== "Play" && validConnection === true ? setSixColor('green') :  setPlaceHold('')
        slotClicked === 7 && PlayButton !== "Play" && validConnection === true ? setSevenColor('green') :  setPlaceHold('')
        slotClicked === 8 && PlayButton !== "Play" && validConnection === true ? setEightColor('green') :  setPlaceHold('')
        slotClicked === 9 && PlayButton !== "Play" && validConnection === true ? setNineColor('green') :  setPlaceHold('')
        slotClicked === 10 && PlayButton !== "Play" && validConnection === true ? setTenColor('green') :  setPlaceHold('')
        slotClicked === 11 && PlayButton !== "Play" && validConnection === true? setElevenColor('green') :  setPlaceHold('')
        slotClicked === 12 && PlayButton !== "Play" && validConnection === true ? setTwelveColor('green') :  setPlaceHold('')
        slotClicked === 13 && PlayButton !== "Play" && validConnection === true ? setThirteenColor('green') :  setPlaceHold('')
        slotClicked === 14 && PlayButton !== "Play" && validConnection === true ? setFourteenColor('green') :  setPlaceHold('')
        slotClicked === 15 && PlayButton !== "Play" && validConnection === true ? setFifteenColor('green') :  setPlaceHold('')
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
        if (correctWordsArray.includes(inputValue) == true){
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
            } else if (word.length == 5){
                score_points += 2;
            } else if (word.length == 6){
                score_points += 3;
            } else if (word.length == 7){
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
                                    <td className='td-game' style={{ backgroundColor: `${zeroColor}` }} onClick={() => tdColorCheck(slots0, 0, inputValue)}><div>{slots0}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${oneColor}`}} onClick={() => tdColorCheck(slots1, 1, inputValue)}><div>{slots1}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${twoColor}`}} onClick={() => tdColorCheck(slots2, 2, inputValue)}><div>{slots2}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${threeColor}`}} onClick={() => tdColorCheck(slots3, 3, inputValue)}><div>{slots3}</div></td>
                                </tr>
                                <tr>
                                    <td className='td-game' style ={{backgroundColor: `${fourColor}`}} onClick={() => tdColorCheck(slots4, 4, inputValue)}><div>{slots4}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${fiveColor}`}} onClick={() => tdColorCheck(slots5, 5, inputValue)}><div>{slots5}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${sixColor}`}} onClick={() => tdColorCheck(slots6, 6, inputValue)}><div>{slots6}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${sevenColor}`}} onClick={() => tdColorCheck(slots7, 7, inputValue)}><div>{slots7}</div></td>
                                </tr>
                                <tr>
                                    <td className='td-game' style ={{backgroundColor: `${eightColor}`}} onClick={() => tdColorCheck(slots8, 8, inputValue)}><div>{slots8}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${nineColor}`}} onClick={() => tdColorCheck(slots9, 9, inputValue)}><div>{slots9}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${tenColor}`}} onClick={() => tdColorCheck(slots10, 10, inputValue)}><div>{slots10}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${elevenColor}`}} onClick={() => tdColorCheck(slots11, 11, inputValue)}><div>{slots11}</div></td>
                                </tr>
                                <tr>
                                    <td className='td-game' style ={{backgroundColor: `${twelveColor}`}} onClick={() => tdColorCheck(slots12, 12, inputValue)}><div>{slots12}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${thirteenColor}`}} onClick={() => tdColorCheck(slots13, 13, inputValue)}><div>{slots13}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${fourteenColor}`}} onClick={() => tdColorCheck(slots14, 14, inputValue)}><div>{slots14}</div></td>
                                    <td className='td-game' style ={{backgroundColor: `${fifteenColor}`}} onClick={() => tdColorCheck(slots15, 15, inputValue)}><div>{slots15}</div></td>
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