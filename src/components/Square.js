import React from "react";

export default function Square(props) {
  return (
    <div className="place-text-center square lg:text-7xl w-full h-40 lg:h-32 border-2 border-solid border-white box-border pt-3  m-auto text-9xl text-center hover:opacity-70"{...props}>{props.x ? 'X' : (props.o ? 'O':'')}</div>
  );
}
//place-text-center h-52