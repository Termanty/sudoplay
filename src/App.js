import React, { useState } from 'react';
import SudokuGrid from './SudokuGrid';
import { solveSudoku } from './solveSudoku';
import { mostDifficultSudoku } from './sudokuPuzzles';

function copy(sudoku) {
  return sudoku.map(row => row.map(c => c))
}

function App() {
  const sudokuState = {
    ready: false,
    puzzle: mostDifficultSudoku.map(row => row.map(c => c)),
    solution: []
  };
  
  const [sudoku, setSudoku] = useState(sudokuState);
 
  const handleClick = () => {
    if (!sudoku.ready) {
      setSudoku({
        ready: true,
        puzzle: copy(sudoku.puzzle),
        solution: copy(solveSudoku(sudoku.puzzle.flat()))
      });
    }
  };
  
  return (
    <div className={"center"}>
      <h1>SUDOKU SOLVER</h1>
      <button className={"button"} onClick={() => console.log("Get")}>Get Sudoku</button>
      <button className={"button"} onClick={() => console.log("Get")}>My own Sudoku</button>
      <SudokuGrid sudoku={sudoku.puzzle} />
      <button className={"button"} onClick={handleClick}>SOLVE</button>
      <SudokuGrid sudoku={sudoku.solution} />
    </div>);
};

export default App;