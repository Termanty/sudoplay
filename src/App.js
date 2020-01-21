import React, { useState } from 'react';
import { SudokuGrid } from './components/SudokuGrid';
import { solveSudoku } from './solveSudoku';
import { mostDifficultSudoku, empty } from './sudokuPuzzles';
import { Navbar } from './components/Navbar';

function copy(sudoku) {
  return sudoku.map(row => row.map(c => c))
}

export function App() {
  const sudokuState = {
    ready: false,
    puzzle: copy(mostDifficultSudoku),
    solution: []
  };

  const [sudoku, setSudoku] = useState(sudokuState);
  const [navbar, setNavbar] = useState(0);

  let cellOnClickArray = []

  function createOnClickArray() {
    cellOnClickArray = empty
      .map( (row, i) => 
        row.map( (c, j) => () => {
          // console.log(`row: ${i}, cell: ${j}`)
          let tmp = copy(sudoku.puzzle)
          tmp[i][j]++
          setSudoku({
            ready: false,
            puzzle: tmp,
            solution: []
          })
    }))
  }

  createOnClickArray()

  const handelNavPuzzle = () => {
    setNavbar(0)
    setSudoku({
      ready: false,
      puzzle: copy(mostDifficultSudoku),
      solution: []
    })
  }

  const handelNavOwn = () => {
    setNavbar(1)
    setSudoku({
      ready: false,
      puzzle: copy(empty),
      solution: []
    })
  }

  const handelNavSign = () => {
    setNavbar(2)
  }
 
  const handleClick = () => {
    if (!sudoku.ready) {
      setSudoku({
        ready: true,
        puzzle: copy(sudoku.puzzle),
        solution: copy(solveSudoku(sudoku.puzzle.flat()))
      });
    }
  };

  const submitSignIn = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  const show = () => {
    if(navbar < 2) {
      return (
        <div>
          <SudokuGrid sudoku={sudoku.puzzle} nav={navbar} clicks={cellOnClickArray}/>
          <button className={"button"} onClick={handleClick}>SOLVE</button>
          <SudokuGrid sudoku={sudoku.solution} />
        </div>
      )
    }
    return (
      <form onSubmit={submitSignIn} className={"button"}>
        <input value="username" onChange={() => console.log('user')} />
        <input value="password" onChange={() => console.log('pwd')} />
        <div><button type="submit">sign in</button></div>
      </form>
      )
  }
  
  return (
    <div className={"center"}>
      <h1>SUDOKU SOLVER</h1>
      <Navbar nav={navbar} own={handelNavOwn} puzz={handelNavPuzzle} sign={handelNavSign}/>
      {show()}
    </div>
  )
}