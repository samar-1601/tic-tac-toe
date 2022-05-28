import "./style.css";
import { winner } from "./TicTacToe";

export function Square({index, player, toggleButton, winners}) {
    const update = () => {
    // if winner has been decided or this box was already checked, don't mark it again
    if(!player &&  !winner)
    {
      console.log(index);
        toggleButton(index);
    }
  };
  return (
    <button id = {index} className={"square " + winners} onClick = {()=>update()}>
      {player}
    </button>
  );
}
