/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useState } from "react";

export default function () {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
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
    <>
      <div>
        <div>
          <label htmlFor="name1" id="name1">
            Name of First Player:
          </label>
        </div>
        <div>
          <input
            type="text"
            autocomplete="off"
            value={name1}
            name="name1"
            id="name1"
            onChange={handleChange1}
          />
        </div>
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
      <div>
        <button>Start</button>
      </div>
    </>
  );
}
