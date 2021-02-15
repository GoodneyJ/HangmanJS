import React from 'react';

import Gallows from '../IMAGES/GALLOWS2.png';
import GallowsWithHead from '../IMAGES/GALLOWSWHEAD.png';
import GallowsHeadBody from '../IMAGES/GALLOWSHEADBODY.png';
import GallowsWithArms from '../IMAGES/GALLOWSWITHARMS.png';
import GallowsFullBody from '../IMAGES/GALLOWSFULLBODY.png';

export default function Output(props) {

    let image;

    switch(props.wrongGuessCount) {
        default:
            image = Gallows;
            break;
        case 1:
            image = GallowsWithHead;
            break;
        case 2:
            image = GallowsHeadBody;
            break;
        case 3:
            image = GallowsWithArms;
            break;
        case 4:
            document.getElementById('app-heading').innerText = "Try Again!"
            image = GallowsFullBody;
            break;
    }

    return (
        <div id="output-container">
            <div id="hangman-image-container"> 
                <img id="img" className="fadeIn" src={image} alt="Hangman-Gallow" height="220px" width="140px" />
            </div>
            
            <div id="hidden-word-container">
                <div id="hidden-word">
                    {props.hiddenWord.map((letter, i) => {
                        return(
                            <div className="letter-slot" key={i}>
                                <p className={`hidden-letter ${letter}`}>{letter}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
