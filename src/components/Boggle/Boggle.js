import React from 'react';
import './boggle.css'
import { useState } from 'react';
import dictionaryArray from './dictionary.js';


//TO-DOs
//Clicking on the same square uncolors it and removes the letter from the input.
//Add sound effects.
//Add score system: 3/4 letter words - 1 pt, 5 letters - 2 pts, 6 = 3 pts, 7 = 5 pts, 8+ = 11 pts
//Find Boggle word library for dictionary.js 

var letterTracker = []
var wordsCorrect = 0;

const Boggle = () => {
    
    let currentBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
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
    const [placeHold, setPlaceHold] = useState("")
    
    

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
    const [shuffleButton, setShuffleButton] = useState("Shuffle")
    

   
    
    
    const shuffleBegin = () => {
        wordsCorrect = 0;
        setCorrectCol({
            ...correctCol,
            text: 'Good luck!',
            color: 'black'
        })
            var timerMinutes = 60 * 3
            shuffleLetters();
            setBoard();
            setShuffleButton(timer(timerMinutes))
      
       
    }
    const shuffleLetters = () => {
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
    
            setShuffleButton(minutes + ":" + seconds)
    //once timer ends, game is "over" and points are displayed. Press button again to play a new game. High score is tracked.
            if (--timer < 0) {
                currentBoard.forEach((element, index) => currentBoard[index] = "")
                setBoard();
                resetColors();
                timer = duration;
                clearInterval(timerCount)
                setInputValue("")
                setShuffleButton("Shuffle")
                setCorrectCol({
                    ...correctCol,
                    text: `You got ${wordsCorrect} words correct`,
                    color: 'black'
                })
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
        console.log(letterTracker);
        let validConnection = isCorrectWord(slotClicked);
        console.log(validConnection)
        slotClicked === 0 && shuffleButton !== "Shuffle" && validConnection === true ? setZeroColor('green') : setPlaceHold('')
        slotClicked === 1 && shuffleButton !== "Shuffle" && validConnection === true ? setOneColor('green') :  setPlaceHold('')
        slotClicked === 2 && shuffleButton !== "Shuffle" && validConnection === true ? setTwoColor('green') :  setPlaceHold('')
        slotClicked === 3 && shuffleButton !== "Shuffle" && validConnection === true ? setThreeColor('green') :  setPlaceHold('')
        slotClicked === 4 && shuffleButton !== "Shuffle" && validConnection === true ? setFourColor('green') :  setPlaceHold('')
        slotClicked === 5 && shuffleButton !== "Shuffle" && validConnection === true ? setFiveColor('green') :  setPlaceHold('')
        slotClicked === 6 && shuffleButton !== "Shuffle" && validConnection === true ? setSixColor('green') :  setPlaceHold('')
        slotClicked === 7 && shuffleButton !== "Shuffle" && validConnection === true ? setSevenColor('green') :  setPlaceHold('')
        slotClicked === 8 && shuffleButton !== "Shuffle" && validConnection === true ? setEightColor('green') :  setPlaceHold('')
        slotClicked === 9 && shuffleButton !== "Shuffle" && validConnection === true ? setNineColor('green') :  setPlaceHold('')
        slotClicked === 10 && shuffleButton !== "Shuffle" && validConnection === true ? setTenColor('green') :  setPlaceHold('')
        slotClicked === 11 && shuffleButton !== "Shuffle" && validConnection === true? setElevenColor('green') :  setPlaceHold('')
        slotClicked === 12 && shuffleButton !== "Shuffle" && validConnection === true ? setTwelveColor('green') :  setPlaceHold('')
        slotClicked === 13 && shuffleButton !== "Shuffle" && validConnection === true ? setThirteenColor('green') :  setPlaceHold('')
        slotClicked === 14 && shuffleButton !== "Shuffle" && validConnection === true ? setFourteenColor('green') :  setPlaceHold('')
        slotClicked === 15 && shuffleButton !== "Shuffle" && validConnection === true ? setFifteenColor('green') :  setPlaceHold('')
        if (validConnection === true){
            letterCheck(slotVal);
        } else {
            letterTracker.pop();
        }
        
    }

    const clearWord = () => {
        setInputValue("")
        resetColors();
    }

    const checkWord = () => {
        console.log(inputValue)
        if (shuffleButton !== "Shuffle" && dictionaryArray.includes(inputValue.toLowerCase())){
          setCorrectCol({
              ...correctCol,
              text: 'Correct!',
              color: 'green'
          })
          wordsCorrect ++
            
        } else {
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
    

    return (
        <div>
            <h1 className="centered">Boggle</h1>
            <h3><strong>Directions</strong>: Click the letter squares to form a word. Letters must be connected</h3>
            <div style={{ color: `${correctCol.color}` }}>{correctCol.text}</div>
            <div className="card">
                <div className='card-body'>
                🤓{inputValue}
                </div>
                
            </div>
            <button type="button" className="btn btn-lg btn-success" onClick={() => {
                if (shuffleButton === "Shuffle"){
                    shuffleBegin();
                }
            } }><span className="start-button">{shuffleButton}</span></button>
            <button type="button" className="btn btn-lg btn-success" onClick={checkWord}><span className="start-button">Check Word</span></button>
            <button type="button" className="btn btn-lg btn-success" onClick={clearWord}><span className="start-button">Clear</span></button>
            <table className="table table-light table-bordered">
                <tbody>
                    <tr>
                        <td style={{ backgroundColor: `${zeroColor}` }} onClick={() => tdColorCheck(slots0, 0, inputValue)}><div>{slots0}</div></td>
                        <td style ={{backgroundColor: `${oneColor}`}} onClick={() => tdColorCheck(slots1, 1, inputValue)}><div>{slots1}</div></td>
                        <td style ={{backgroundColor: `${twoColor}`}} onClick={() => tdColorCheck(slots2, 2, inputValue)}><div>{slots2}</div></td>
                        <td style ={{backgroundColor: `${threeColor}`}} onClick={() => tdColorCheck(slots3, 3, inputValue)}><div>{slots3}</div></td>
                    </tr>
                    <tr>
                        <td style ={{backgroundColor: `${fourColor}`}} onClick={() => tdColorCheck(slots4, 4, inputValue)}><div>{slots4}</div></td>
                        <td style ={{backgroundColor: `${fiveColor}`}} onClick={() => tdColorCheck(slots5, 5, inputValue)}><div>{slots5}</div></td>
                        <td style ={{backgroundColor: `${sixColor}`}} onClick={() => tdColorCheck(slots6, 6, inputValue)}><div>{slots6}</div></td>
                        <td style ={{backgroundColor: `${sevenColor}`}} onClick={() => tdColorCheck(slots7, 7, inputValue)}><div>{slots7}</div></td>
                    </tr>
                    <tr>
                        <td style ={{backgroundColor: `${eightColor}`}} onClick={() => tdColorCheck(slots8, 8, inputValue)}><div>{slots8}</div></td>
                        <td style ={{backgroundColor: `${nineColor}`}} onClick={() => tdColorCheck(slots9, 9, inputValue)}><div>{slots9}</div></td>
                        <td style ={{backgroundColor: `${tenColor}`}} onClick={() => tdColorCheck(slots10, 10, inputValue)}><div>{slots10}</div></td>
                        <td style ={{backgroundColor: `${elevenColor}`}} onClick={() => tdColorCheck(slots11, 11, inputValue)}><div>{slots11}</div></td>
                    </tr>
                    <tr>
                        <td style ={{backgroundColor: `${twelveColor}`}} onClick={() => tdColorCheck(slots12, 12, inputValue)}><div>{slots12}</div></td>
                        <td style ={{backgroundColor: `${thirteenColor}`}} onClick={() => tdColorCheck(slots13, 13, inputValue)}><div>{slots13}</div></td>
                        <td style ={{backgroundColor: `${fourteenColor}`}} onClick={() => tdColorCheck(slots14, 14, inputValue)}><div>{slots14}</div></td>
                        <td style ={{backgroundColor: `${fifteenColor}`}} onClick={() => tdColorCheck(slots15, 15, inputValue)}><div>{slots15}</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}



export default Boggle;