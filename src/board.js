import { Square } from "./square";
import "./style.css";

export function Board({ toggle, squares, winners }) {
    const togglePlayer = (index) => {
      toggle(index);
    };
    console.log("square recieved in board : " +  squares);

  const renderSquare = (i) => {
    if(winners && winners.includes(i))
      return <Square winner ="winner" index={i} player={squares[i]} toggleButton={togglePlayer} />;
    return <Square winner="" index={i} player={squares[i]} toggleButton={togglePlayer} />;
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
