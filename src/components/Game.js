import React from "react";
import Board from "./Board";
import Square from "./Square";
import { useEffect, useState } from "react";

const defaultSquares = () => new Array(9).fill(null);

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function Game() {
  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    const isComputerTurn =
      squares.filter((square) => square !== null).length % 2 === 1;

    const linesThat = (a, b, c) => {
      return lines.filter((indexes) => {
        const values = indexes.map((index) => squares[index]);
        return (
          JSON.stringify([a, b, c].sort()) === JSON.stringify(values.sort())
        );
      });
    };
    const emptyIndexes = squares
      .map((square, index) => (square === null ? index : null))
      .filter((val) => val !== null);
    const playerWon = linesThat("X", "X", "X").length > 0;
    const computerWon = linesThat("O", "O", "O").length > 0;
    if (playerWon) {
      setWinner("X");
      return;
    }
    if (computerWon) {
      setWinner("O");
      return;
    }
    const isTie = () => {
      return squares.filter((square) => square !== null).length === 9;
    };
    if (isTie()) {
      setWinner("Tie");
      return;
    }

    const putComputerAt = (index) => {
      let newSquares = squares;
      newSquares[index] = "O";
      setSquares([...newSquares]);
    };
    if (isComputerTurn) {
      setTimeout(() => {
        const winningLines = linesThat("O", "O", null);
        if (winningLines.length > 0) {
          const winIndex = winningLines[0].filter(
            (index) => squares[index] === null
          )[0];
          putComputerAt(winIndex);
          return;
        }
        const linesToBlock = linesThat("X", "X", null);
        if (linesToBlock.length > 0) {
          const blockIndex = linesToBlock[0].filter(
            (index) => squares[index] === null
          )[0];
          putComputerAt(blockIndex);
          return;
        }

        const linesToContinue = linesThat("O", null, null);
        if (linesToContinue.length > 0) {
          putComputerAt(
            linesToContinue[0].filter((index) => squares[index] === null)[0]
          );
          return;
        }

        const randomIndex =
          emptyIndexes[Math.ceil(Math.random() * emptyIndexes.length)];
        putComputerAt(randomIndex);
      }, 500);
    }
  }, [squares]);
  function handleClick(index) {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (winner !== null) {
      return;
    }
    let newSquares = squares;
    if (isPlayerTurn) {
      if (squares[index] === "O") {
        return;
      }
      newSquares[index] = "X";
      setSquares([...newSquares]);
    }
  }
  const restart = () => {
    setSquares(defaultSquares());
    let won = document.getElementById("won");
    let lose = document.getElementById("lose");
    if (lose !== null) {
      lose.style.visibility = "hidden";
    }
    if (won !== null) {
      won.style.visibility = "hidden";
    }
    setWinner(null);
    return;
  };

  return (
    <section id="game">
      <div className="Game container w-80 m-auto ">
        <h1 className="text-center m-5 p-2 sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Let's Play X/O
        </h1>
        <h1 className="text-center mb-2 pb-2 sm:text-">You can win if you'll really try</h1>
        <Board>
          {squares.map((square, index) => (
            <Square
              key={index}
              x={square === "X" ? 1 : 0}
              o={square === "O" ? 1 : 0}
              onClick={() => handleClick(index)}
            />
          ))}
        </Board>
        <div id="won" className="result">
          {winner && winner === "X" && (
            <div className="p-5 text-center text-3xl bg-green-600 text-black visible">
              You Won!
            </div>
          )}
          {winner && winner === "O" && (
            <div
              id="lose"
              className="p-5 text-center text-3xl bg-red-600 text-black visible"
            >
              You Lost!
            </div>
          )}
          {winner && winner === "Tie" && (
            <div
              id="Tie"
              className="p-5 text-center text-3xl bg-yellow-600 text-black visible"
            >
              It's A Tie!
            </div>
          )}
        </div>

        <button
          onClick={() => restart()}
          className="text-center m-auto mt-5 hover:opacity-70 border rounded-lg p-3 flex"
        >
          New Game?
        </button>
      </div>
    </section>
  );
}
