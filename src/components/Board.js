import React from "react";

export default function Board(props) {
  return (
    <div
      className="w-full  lg:w-1/2 lg:h-fit grid-cols-3 lg:text-3xl  m-auto grid-rows-3 text-7xl board grid border-solid border-2 border-white"
      {...props}
    ></div>
  );
}
