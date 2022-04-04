import React from "react";

export default function Square(props) {
  return (
    <div className="pt-3 square w-28 h-28 border-2 border-solid border-white box-border  text-7xl text-center hover:opacity-70"{...props}>{props.x ? 'X' : (props.o ? 'O':'')}</div>
  );
}
