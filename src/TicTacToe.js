import { Board } from "./board";
import { useState } from "react";
import { CalculateWinner } from "./calculateWinner";
import "./style.css";

export let winner; // variable to store the winner 'X' or 'O'

let history = []; // contains the history in terms of array of squre values at each step
let stepNumber = 0; // counter for storing the steps taken in game
let status; // stores status of the game

// temporary array to store the current state or the current value held by each of the 9 squares
let squares = Array(9).fill("");

// fill the history with empty values before the game starts
history.push(squares);

function TicTacToe() {
  // player state
  const [player, setPlayer] = useState("X");
  // grid state stored in squareValues
  const [squareValues, setSquareValues] = useState(squares);

  // This Function updates the history list based on game stage
  const updateHistory = () => {
    history = history.slice(0, stepNumber + 1);
    // store the last game stage(i.e the current) in the squares array
    const current = history[history.length - 1];
    squares = current.slice();
  };

  // Function to Toggle the player and update the related variables
  const togglePlayer = (index) => {
    updateHistory();

    // update the latest squares array with the box value clicked by the player
    squares[index] = player;

    // update the history list
    history.push(squares);

    // No. of steps taken in game is updated
    stepNumber = history.length;

    // Check for a winner
    winner = CalculateWinner(squares);

    // update the square-list for the latest grid
    setSquareValues(squares);
    
    // update the player who's turn has come according to the game stage
    if (stepNumber%2!==0) setPlayer("X");
    else setPlayer("O");
  };

  // Function to Jump to a new state of the Game based on the history
  // level clicked
  const jumpTo = (step) => {
    console.log("step : " + step);
    console.log("stepNumber : " + stepNumber);
    if (stepNumber === step+1) return;
    
    stepNumber = step;
    // update the history to execute this jump
    updateHistory();

    // whenever we go to a previous game stage, the winner is again null.
    winner = "";
    setSquareValues(squares);

    if (stepNumber%2===0) setPlayer("X");
    else setPlayer("O");

    console.log("player : " + player);
    console.log(`square : ${squares}`);
  };

  // Update the moves list according to the history
  const moves = history.map((step, move) => {
    // decide the text for the status
    const desc = move !== "" ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button className="history-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  // Update the status of game
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + player;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={squareValues}
          toggle={togglePlayer}
          player={player}
          winner={winner}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default TicTacToe;
