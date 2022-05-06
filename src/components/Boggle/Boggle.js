import React from 'react';
import './boggle.css'
import { useState } from 'react';


//TO-DOs
//Build algorithm to identify if letters in accepted word are all connected.
//Import word library.
 

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
    const [inputValue, setInputValue] = useState("Boggle!!!")
    const [shuffleButton, setShuffleButton] = useState("Shuffle")
    

   
    
    
    const shuffleBegin = () => {
            var timerMinutes = 60 * 1
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
                setInputValue("Boggle!!!")
                setShuffleButton("Shuffle")
            }
        }, 1000);
    }

    const addLetter = (slotVal, slotClicked) => {
        if (inputValue === "Boggle!!!"){
            setInputValue(slotVal)
        } else {
            setInputValue(inputValue + slotVal)
        }
        tdColorCheck(slotClicked)
            
    }

    const tdColorCheck = (slotClicked) => {
        slotClicked === 0 && shuffleButton !== "Shuffle" ? setZeroColor('green') : setPlaceHold('')
        slotClicked === 1 && shuffleButton !== "Shuffle" ? setOneColor('green') :  setPlaceHold('')
        slotClicked === 2 && shuffleButton !== "Shuffle" ? setTwoColor('green') :  setPlaceHold('')
        slotClicked === 3 && shuffleButton !== "Shuffle" ? setThreeColor('green') :  setPlaceHold('')
        slotClicked === 4 && shuffleButton !== "Shuffle" ? setFourColor('green') :  setPlaceHold('')
        slotClicked === 5 && shuffleButton !== "Shuffle" ? setFiveColor('green') :  setPlaceHold('')
        slotClicked === 6 && shuffleButton !== "Shuffle" ? setSixColor('green') :  setPlaceHold('')
        slotClicked === 7 && shuffleButton !== "Shuffle" ? setSevenColor('green') :  setPlaceHold('')
        slotClicked === 8 && shuffleButton !== "Shuffle" ? setEightColor('green') :  setPlaceHold('')
        slotClicked === 9 && shuffleButton !== "Shuffle" ? setNineColor('green') :  setPlaceHold('')
        slotClicked === 10 && shuffleButton !== "Shuffle" ? setTenColor('green') :  setPlaceHold('')
        slotClicked === 11 && shuffleButton !== "Shuffle" ? setElevenColor('green') :  setPlaceHold('')
        slotClicked === 12 && shuffleButton !== "Shuffle" ? setTwelveColor('green') :  setPlaceHold('')
        slotClicked === 13 && shuffleButton !== "Shuffle" ? setThirteenColor('green') :  setPlaceHold('')
        slotClicked === 14 && shuffleButton !== "Shuffle" ? setFourteenColor('green') :  setPlaceHold('')
        slotClicked === 15 && shuffleButton !== "Shuffle" ? setFifteenColor('green') :  setPlaceHold('')
    }

    const clearWord = () => {
        setInputValue("Boggle!!!")
        resetColors();
    }
    
    const isCorrectWord = () => {

    }
    

    return (
        <div>
            <div className="card">
                <div className='card-body'>
                    {inputValue}
                </div>
                
            </div>
            <button type="button" className="btn btn-lg btn-success" onClick={() => {
                if (shuffleButton === "Shuffle"){
                    shuffleBegin();
                }
            } }><span className="start-button">{shuffleButton}</span></button>
            <button type="button" className="btn btn-lg btn-success"><span className="start-button">Check Word</span></button>
            <button type="button" className="btn btn-lg btn-success" onClick={clearWord}><span className="start-button">Clear</span></button>
            <table className="table table-light table-bordered">
                <tbody>
                    <tr>
                        <td style ={{backgroundColor: `${zeroColor}`}} onClick={() => addLetter(slots0, 0)}><div>{slots0}</div></td>
                        <td style ={{backgroundColor: `${oneColor}`}} onClick={() => addLetter(slots1, 1)}><div>{slots1}</div></td>
                        <td style ={{backgroundColor: `${twoColor}`}} onClick={() => addLetter(slots2, 2)}><div>{slots2}</div></td>
                        <td style ={{backgroundColor: `${threeColor}`}} onClick={() => addLetter(slots3, 3)}><div>{slots3}</div></td>
                    </tr>
                    <tr>
                        <td style ={{backgroundColor: `${fourColor}`}} onClick={() => addLetter(slots4, 4)}><div>{slots4}</div></td>
                        <td style ={{backgroundColor: `${fiveColor}`}} onClick={() => addLetter(slots5, 5)}><div>{slots5}</div></td>
                        <td style ={{backgroundColor: `${sixColor}`}} onClick={() => addLetter(slots6, 6)}><div>{slots6}</div></td>
                        <td style ={{backgroundColor: `${sevenColor}`}} onClick={() => addLetter(slots7, 7)}><div>{slots7}</div></td>
                    </tr>
                    <tr>
                        <td style ={{backgroundColor: `${eightColor}`}} onClick={() => addLetter(slots8, 8)}><div>{slots8}</div></td>
                        <td style ={{backgroundColor: `${nineColor}`}} onClick={() => addLetter(slots9, 9)}><div>{slots9}</div></td>
                        <td style ={{backgroundColor: `${tenColor}`}} onClick={() => addLetter(slots10, 10)}><div>{slots10}</div></td>
                        <td style ={{backgroundColor: `${elevenColor}`}} onClick={() => addLetter(slots11, 11)}><div>{slots11}</div></td>
                    </tr>
                    <tr>
                        <td style ={{backgroundColor: `${twelveColor}`}} onClick={() => addLetter(slots12, 12)}><div>{slots12}</div></td>
                        <td style ={{backgroundColor: `${thirteenColor}`}} onClick={() => addLetter(slots13, 13)}><div>{slots13}</div></td>
                        <td style ={{backgroundColor: `${fourteenColor}`}} onClick={() => addLetter(slots14, 14)}><div>{slots14}</div></td>
                        <td style ={{backgroundColor: `${fifteenColor}`}} onClick={() => addLetter(slots15, 15)}><div>{slots15}</div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

//I need the cells to turn green when they are clicked on and remain that way.

export default Boggle;