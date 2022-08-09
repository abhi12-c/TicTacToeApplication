import React, { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./Components/helpers";

import "./Components/root.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const refreshPage = () => {
    window.location.reload(false);
  };

  const winner = calculateWinner(board);

  const p1 = name1;
  const p2 = name2;
  const res = winner ? p1 : p2;
  const message = winner
    ? `Winner is ${res}`
    : `Next player is ${isXNext ? p2 : p1}`;

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        }

        return square;
      });
    });

    setIsXNext((prev) => !prev);
  };

  const handleChange1 = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    setName1(val);
  };
  const handleChange2 = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const val = e.target.value;
    console.log(name, val);
    setName2(val);
  };

  return (
    <div className="app">
      <div>
        <label htmlFor="name1" id="name1">
          Name of First Player:
        </label>
        <input
          type="text"
          autocomplete="off"
          value={name1}
          name="name1"
          id="name1"
          onChange={handleChange1}
        />
      </div>
      <div>
        <label htmlFor="name2" id="name2">
          Name of First Player:
        </label>
        <input
          type="text"
          autocomplete="off"
          value={name2}
          name="name2"
          id="name2"
          onChange={handleChange2}
        />
      </div>

      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>

      <Board board={board} handleSquareClick={handleSquareClick} />
      <button onClick={refreshPage}>Play Again</button>
    </div>
  );
};

export default App;
