import "./style.css";
import { useState } from "react";
import { winner } from "./board";

export function Square({index, player, toggle}) {
  const [value, setValue] = useState("");
  const update = () => {
    if(value==="" && !winner)
    {
        setValue(value => value = player);
        toggle(index);
    }
  };
  return (
    <button value = {index} className="square" onClick = {()=>update()}>
      {value}
    </button>
  );
}
