import { Square } from "./square";
import { useState } from "react";
import { CalculateWinner } from "./calculateWinner";
import "./style.css";

let global_squares = Array(9).fill("");
export let winner;

export function Board() {
  const [status, setStatus] = useState("Next Player : X");
  const [player, setPlayer] = useState("X");

  const togglePlayer = (index) => {

    global_squares[index] = player;
    const squares = global_squares.slice();
    winner = CalculateWinner(squares);

    if (winner) {
      setStatus(`Winner is ${winner}`);
      return;
    }
    if (player === "X") {
      setStatus("Next player : O");
      setPlayer("O");
    } else {
      setStatus("Next player : X");
      setPlayer("X");
    }
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square index={0} player={player} toggle={togglePlayer} />
        <Square index={1} player={player} toggle={togglePlayer} />
        <Square index={2} player={player} toggle={togglePlayer} />
      </div>
      <div className="board-row">
        <Square index={3} player={player} toggle={togglePlayer} />
        <Square index={4} player={player} toggle={togglePlayer} />
        <Square index={5} player={player} toggle={togglePlayer} />
      </div>
      <div className="board-row">
        <Square index={6} player={player} toggle={togglePlayer} />
        <Square index={7} player={player} toggle={togglePlayer} />
        <Square index={8} player={player} toggle={togglePlayer} />
      </div>
    </div>
  );
}
