import React from 'react';

export function Navbar() {
  return (
    <div>
      <button className={"button"} onClick={() => console.log("Get")}>Give Sudoku</button>
      <button className={"button"} onClick={() => console.log("Get")}>My own Sudoku</button>
    </div>
  )
}