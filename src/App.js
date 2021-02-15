import React, {useState} from 'react';

import Output from './components/output.js'
import Keyboard from './components/keyboard.js';

import { FaRedoAlt } from 'react-icons/fa';

import './css/App.css';

function App() {
  document.title = "HangmanJS"


  //State Variables
  const [wordList, setWordList] = useState(['Javascript', 'Html', 'CSS', 'Jarrod', "Github", 'NodeJS']);
  const [wrongGuessCount, setWrongGuessCount] = useState(0);
  const [headingText, setHeadingText] = useState("HangmanJS");
  const [wordChoice, setWordChoice] = useState(wordList[Math.floor((Math.random() * wordList.length))].toLocaleLowerCase().split(''));

  //Number of guesses before fail
  let chances = 4;
  let rightElements = []; 
  let wrongElements = [];

  //Checks the wordChoice index of the target, applies conditional classes if it is/isn't in the array of letters
  //If the target.id is included in the wordChoice array, it grabs the corresponding hidden letter classes and makes them visible
  const buttonClick = (e) => {

    try {

      if(wrongGuessCount === chances ) {

        setHeadingText("Try Again!");
        document.getElementById('app-heading').innerText = "Try Again!";
        throw "You are out of Tries!"

      } else {
        if(wordChoice.indexOf(e.target.id.toLocaleLowerCase()) !== -1) {
          let items = document.getElementsByClassName(e.target.id.toLocaleLowerCase());
    
          for(let i = 0; i < items.length; i++) {
            items[i].classList.add('visible-letter');
            rightElements.push(items[i]);
          }

          e.target.classList.add('right-guess');
        } else {
          wrongElements.push(e.target);
          e.target.classList.add('wrong-guess');
          setWrongGuessCount(wrongGuessCount + 1);
        }
      }

    } catch(err) {
      setHeadingText("Try Again!");
      console.log(err)
    }
  }

  //Chooses another random word from state, Resets Wrong guess count
  //The for loop takes the 3 elements with the class 'row' & loops through their children removing right/wrong-guess classes
  const retryButtonClick = () => {
    document.getElementById('app-heading').innerText = "HangmanJS"
    setWordChoice(wordList[Math.floor((Math.random() * wordList.length))].toLocaleLowerCase().split(''))
    setWrongGuessCount(0);
    let rows = document.getElementsByClassName('row');

    for(let i = 0; i < rows.length; i++) {
      let singleRow = rows[i].childNodes;
      for(let j = 0; j < singleRow.length; j++) {
        singleRow[j].classList.remove('right-guess');
        singleRow[j].classList.remove('wrong-guess');
      }
    }
  }

  return (
    <div id="app-container" className="App">
      <div id="interface-info-container">
        <h1 id="app-heading">{headingText}</h1>
        <a id="redo-button" onClick={retryButtonClick} href="#"><FaRedoAlt /></a>
        <h4 id="wrong-guess-count">Wrong Guesses: {wrongGuessCount}</h4>
      </div>
      <Output hiddenWord={wordChoice} wrongGuessCount={wrongGuessCount}/>
      <Keyboard buttonClick={buttonClick}/>
    </div>
  );
}

export default App;
