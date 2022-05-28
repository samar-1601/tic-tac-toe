import "./style.css";

export function Square({index, player, toggleButton, winner}) {
    const update = () => {
    // if winner has been decided or this box was already checked, don't mark it again
    if(!player &&  !winner)
    {
      console.log(index);
        toggleButton(index);
    }
  };
  return (
    <button id = {index} className={"square " + winner} onClick = {()=>update()}>
      {player}
    </button>
  );
}
