import React from "react";
import Square from "./Square";
export default function Board() {
  return (
    <>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
      <div>
        <Square value={0} />
        <Square value={0} />
        <Square value={0} />
      </div>
    </>
  );
}
