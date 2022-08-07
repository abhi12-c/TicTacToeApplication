import React from "react";
import Board from "./Components/Board";
import "./Components/root.scss";
function App() {
  return (
    <div className="app">
      <h1>Tic Tak Toe</h1>
      <Board />
    </div>
  );
}

export default App;
