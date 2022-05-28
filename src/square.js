import "./style.css";
import { winner } from "./TicTacToe.js";

export function Square({index, player, toggleButton}) {
    const update = () => {
    // if winner has been decided or this box was already checked, don't mark it again
    if(player==="" &&  !winner)
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
