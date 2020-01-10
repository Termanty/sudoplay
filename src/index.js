import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SudokuGrid } from './SudokuGrid';
import { solveSudoku } from './solveSudoku';

const vaikeaSudoku = [
  8, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 3, 6, 0, 0, 0, 0, 0,
  0, 7, 0, 0, 9, 0, 2, 0, 0,
  0, 5, 0, 0, 0, 7, 0, 0, 0,
  0, 0, 0, 0, 4, 5, 7, 0, 0,
  0, 0, 0, 1, 0, 0, 0, 3, 0,
  0, 0, 1, 0, 0, 0, 0, 6, 8,
  0, 0, 8, 5, 0, 0, 0, 1, 0,
  0, 9, 0, 0, 0, 0, 4, 0, 0
]

const App = () => {
  const [ sudoku, setSudo ] = useState([])

  const handleClick = () => {
    sudoku.length ? console.log("ready") : setSudo([...solveSudoku(vaikeaSudoku)])
  }

  return (
    <div>
      <p>SUDOKU SOLVER</p>
      <button onClick={() => console.log("Get")}>Get Sudoku</button>
      <button onClick={() => console.log("Get")}>My own Sudoku</button>
      <SudokuGrid sudo={vaikeaSudoku} />
      <button onClick={handleClick}>SOLVE</button>
      <SudokuGrid sudo={sudoku} />
    </div>);
}
ReactDOM.render(<App />, document.getElementById('root'));