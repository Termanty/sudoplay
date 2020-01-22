import React, { useState } from 'react';
import { SudokuGrid } from './components/SudokuGrid';
import { solveSudoku } from './solveSudoku';
import { mostDifficultSudoku, empty } from './sudokuPuzzles';
import { Navbar } from './components/Navbar';

function copy(sudoku) {
  return sudoku.map(row => row.map(c => c))
}

export function App() {
  
  const [navbar, setNavbar] = useState(0);
  const [puzzle, setPuzzle] = useState(copy(mostDifficultSudoku));
  const [createSudoku, setCreateSudoku] = useState(copy(empty))
  const [showSolution, setShowSolution] = useState(false)
  
  const original = mostDifficultSudoku
  const solution = solveSudoku(mostDifficultSudoku.flat())

  
  let cellOnClickArray = []
  function createOnClickArray() {
    cellOnClickArray = empty
      .map( (row, i) => 
        row.map( (c, j) => () => {
          // console.log(`row: ${i}, cell: ${j}`)
          let tmp
          if(navbar === 1) { 
            tmp = copy(createSudoku)
            tmp[i][j]++
            setCreateSudoku(tmp)
          } else {
            tmp = copy(puzzle)
            tmp[i][j]++
            setPuzzle(tmp)
          }
    }))
  }
  createOnClickArray()


  const handelNavPuzzle = () => setNavbar(0)
  const handelNavOwn = () => setNavbar(1)
  const handelNavSign = () => setNavbar(2)
 

  const handleClick = () => {
    console.log(solution);
    
    setShowSolution(!showSolution)
  };


  const submitSignIn = (event) => {
    event.preventDefault()
    // console.log('submit')
  }

  const show = () => {
    if(navbar < 2) {
      return (
        <div>
          <SudokuGrid 
            sudoku={navbar === 0 ? puzzle : createSudoku} 
            nav={navbar} 
            clicks={cellOnClickArray}
            original={original}
            solution={solution}
            showSolution={showSolution} />
          <button className={"button"} onClick={handleClick}>Solution</button>
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