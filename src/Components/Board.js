import React from "react";
import Square from "./Square";
import "./root.scss";
export default function Board() {
  return (
    <>
      <div className="board">
        <div className="board-row">
          <Square value={0} />
          <Square value={0} />
          <Square value={0} />
        </div>
        <div className="board-row">
          <Square value={0} />
          <Square value={0} />
          <Square value={0} />
        </div>
        <div className="board-row">
          <Square value={0} />
          <Square value={0} />
          <Square value={0} />
        </div>
      </div>
    </>
  );
}
