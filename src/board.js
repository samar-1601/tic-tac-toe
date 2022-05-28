import { Square } from "./square";
import "./style.css";

export function Board({ toggle, squares }) {
    const togglePlayer = (index) => {
      toggle(index);
    };
    console.log("suuare recieved in board : " +  squares);
  const renderSquare = (i) => {
    return <Square index={i} player={squares[i]} toggleButton={togglePlayer} />;
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
