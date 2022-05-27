import "./style.css";
import { winner } from "./TicTacToe.js";

export function Square({index, player, toggleButton}) {
    const update = () => {
    if(!winner)
    {
        toggleButton(index);
    }
  };
  return (
    <button id = {index} className="square" onClick = {()=>update()}>
      {player}
    </button>
  );
}
