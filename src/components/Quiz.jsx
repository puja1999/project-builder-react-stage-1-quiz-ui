import React, { Component } from 'react';
import '../styles/quiz.css';
export default class Quiz extends Component{
    render(){
        return(
            <div className="quiz-parent">
                <div className="quiz-cont">
                <div id="quiz-container">
                    <div className="head">Question</div>
                    <div className="question-num">
                    <p id="numbers">3/15</p>
                    <p id="question">Does React creates a VIRTUAL DOM in memory ?</p>
                    </div>
                    <div className="options-container">
                    <div className="option-cont-1">
                        <button id="opt-1">True</button>
                        <button id="opt-2">False</button>
                        </div>
                        <div className="option-cont-2">
                        <button id="opt-3">Can be true or false</button>
                        <button id="opt-4">Can not say</button>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <button id="prev">Previous</button>
                    <button id="next">Next</button>
                    <button id="quit">Quit</button>
                </div>
            </div>
            </div>
        )
    }
}
