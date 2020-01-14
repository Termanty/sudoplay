import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SudokuGrid } from './SudokuGrid';
import { solveSudoku } from './solveSudoku';
import { mostDifficultSudoku } from './sudokuPuzzles';

const App = () => {
  const sudokuState = {
    ready: false,
    puzzle: [...mostDifficultSudoku],
    solution: []
  }

  const [ sudoku, setSudoku ] = useState(sudokuState)

  const handleClick = () => {
    if (!sudoku.ready) {
      setSudoku({
        ready: true,
        puzzle: [...sudoku.puzzle],
        solution: [...solveSudoku(sudoku.puzzle)]
      })
    }
  }

  return (
    <div className={"center"}>
      <h1>SUDOKU SOLVER</h1>
      <button className={"button"} onClick={() => console.log("Get")}>Get Sudoku</button>
      <button className={"button"} onClick={() => console.log("Get")}>My own Sudoku</button>
      <SudokuGrid sudoku={sudoku.puzzle} />
      <button className={"button"} onClick={handleClick}>SOLVE</button>
      <SudokuGrid sudoku={sudoku.solution} />
    </div>);
}

ReactDOM.render(<App />, document.getElementById('root'));