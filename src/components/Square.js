import React from "react";

export default function Square(props) {
  return (
    <div className="lg:pt-3 square w-full h-full lg:h-40 border-2 border-solid pt-28 border-white box-border  m-auto text-9xl text-center hover:opacity-70"{...props}>{props.x ? 'X' : (props.o ? 'O':'')}</div>
  );
}
