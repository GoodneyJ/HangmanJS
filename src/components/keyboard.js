import React from 'react'

export default function keyboard(props) {




    return (
        <div id="keyboard-container">
            <div id="keyboard-row-one" className="row">
                <div id="A" className="keyboard-item" onClick={props.buttonClick}>A</div>
                <div id="B" className="keyboard-item" onClick={props.buttonClick}>B</div>
                <div id="C" className="keyboard-item" onClick={props.buttonClick}>C</div>
                <div id="D" className="keyboard-item" onClick={props.buttonClick}><p>D</p></div>
                <div id="E" className="keyboard-item" onClick={props.buttonClick}>E</div>
                <div id="F" className="keyboard-item" onClick={props.buttonClick}>F</div>
                <div id="G" className="keyboard-item" onClick={props.buttonClick}>G</div>
                <div id="H" className="keyboard-item" onClick={props.buttonClick}>H</div>
                <div id="I" className="keyboard-item" onClick={props.buttonClick}>I</div>
                <div id="J" className="keyboard-item" onClick={props.buttonClick}>J</div>
            </div>

            <div id="keyboard-row-two" className="row" onClick={props.buttonClick}>
                <div id="K" className="keyboard-item" onClick={props.buttonClick}>K</div>
                <div id="L" className="keyboard-item" onClick={props.buttonClick}>L</div>
                <div id="M" className="keyboard-item" onClick={props.buttonClick}>M</div>
                <div id="N" className="keyboard-item" onClick={props.buttonClick}>N</div>
                <div id="O" className="keyboard-item" onClick={props.buttonClick}>O</div>
                <div id="P" className="keyboard-item" onClick={props.buttonClick}>P</div>
                <div id="Q" className="keyboard-item" onClick={props.buttonClick}>Q</div>
                <div id="R" className="keyboard-item" onClick={props.buttonClick}>R</div>
                <div id="S" className="keyboard-item" onClick={props.buttonClick}>S</div>
                <div id="T" className="keyboard-item" onClick={props.buttonClick}>T</div>
            </div>

            <div id="keyboard-row-three" className="row" onClick={props.buttonClick}>
                <div id="U" className="keyboard-item" onClick={props.buttonClick}>U</div>
                <div id="V" className="keyboard-item" onClick={props.buttonClick}>V</div>
                <div id="W" className="keyboard-item" onClick={props.buttonClick}>W</div>
                <div id="X" className="keyboard-item" onClick={props.buttonClick}>X</div>
                <div id="Y" className="keyboard-item" onClick={props.buttonClick}>Y</div>
                <div id="Z" className="keyboard-item" onClick={props.buttonClick}>Z</div>
            </div>
        </div>
    )
}
