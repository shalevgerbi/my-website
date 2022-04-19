import React from "react";

export default function Board(props) {
  return (
    <div
      className="h-1/2 w-full lg:w-1/2 grid-cols-3 m-auto grid-rows-3 text-7xl board grid border-solid border-2 border-white"
      {...props}
    ></div>
  );
}
