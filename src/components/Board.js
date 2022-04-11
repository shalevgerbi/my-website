import React from "react";

export default function Board(props) {
  return (
    <div
      className="grid-cols-3 grid-rows-3 board grid border-solid border-2 border-white"
      {...props}
    ></div>
  );
}
