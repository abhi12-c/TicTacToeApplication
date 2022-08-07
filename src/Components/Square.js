import React from "react";
//import "./Square.style.css";
import "./root.scss";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {
  return (
    <button type="submit" className="square">
      {props.value}
    </button>
  );
}
