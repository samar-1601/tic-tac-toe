import { Board } from "./board";
import { useState } from "react";
import { CalculateWinner } from "./calculateWinner";
import "./style.css";

export let winner; // variable to store the winner 'X' or 'O'

let history = []; // contains the history in terms of array of squre values at each step
let stepNumber = 0; // counter for storing the steps taken in game
let status; // stores status of the game

// arrys to store the current state or the current value held by each of the 9 squares
let squares = Array(9).fill("");

// fill the history with empty values before the game starts
history.push(squares);

function TicTacToe() {

  const [player, setPlayer] = useState("X");

  // This Function updates the history list based on game stage
  const updateHistory = ()=>{
    history = history.slice(0, stepNumber + 1);
    // store the last game stage(i.e the current) in the squares array
    squares = history[history.length - 1].slice();    
  }

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

    // update the player who's turn has come according to the game stage
    setPlayer(`${stepNumber%2?"X":"O"}`);
  };

  // Function to Jump to a new state of the Game based on the history
  // level clicked

  const jumpTo = (step) => {
    // whenever we go to a previous game stage, the winner is again null.
    winner = "";
    stepNumber = step;
   
    // update the history to execute this jump
    updateHistory();

    setPlayer(`${stepNumber%2?"X":"O"}`);
  };

  // Update the moves list according to the history
  const moves = history.map((step, move) => {

    // decide the text for the status
    const desc = (move!=="") ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button className = "history-button" onClick={() => jumpTo(move)}>{desc}</button>
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
          squares={squares}
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
