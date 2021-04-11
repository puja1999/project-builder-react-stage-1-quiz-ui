import React, { Component } from "react";
import "../styles/result.css";
export default class ResultComponent extends Component {
  render() {
    return (
      <div className="result-parent">
        <div className="result">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
          <h1 className="result-heading">Result</h1>
        </div>
        <div className="result-cont">
          <p className="status">You need more practice !</p>
          <p className="score">Your Score: 20%</p>

          <div className="main">
            <p>
              Total number of question:<span> 15</span>
            </p>
            <p>
              Number of attempted question:<span> 9</span>
            </p>
            <p>
              Number of Correct Answers:<span> 3</span>
            </p>
            <p>
              Number of Wrong Answers:<span> 6</span>
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button className="play">Play Again</button>
          <button className="back">Back to Home</button>
        </div>
      </div>
    );
  }
}
