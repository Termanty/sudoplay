import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SudokuGrid } from './components/SudokuGrid';
import { solveSudoku } from './solveSudoku';
import { Navbar } from './components/Navbar';
import { empty } from './empty';

function copy(sudoku) {
  return sudoku.map(row => row.map(c => c))
}

export function App() {
  const [navbar, setNavbar] = useState(2);
  const [puzzles, setPuzzles] = useState([]);
  const [puzzle, setPuzzle] = useState([]);
  const [solution, setSolution] = useState([])
  const [createSudoku, setCreateSudoku] = useState(copy(empty))
  const [showSolution, setShowSolution] = useState(false)
  var selected = 1;

  useEffect(() => {
    axios
      .get("http://localhost:3001/puzzles")
      .then( response => {
        var data = response.data;
        var p = data[selected].puzzle
        setPuzzles(data)
        setPuzzle(copy(p))
        setSolution(solveSudoku(p.flat()))
      })
  }, [])
  
  function clicksArray() {
    function increase(i, j ,sudoku, setSudoku) {
      let tmp = copy(sudoku)
      tmp[i][j]++
      if(tmp[i][j] > 9) {
        tmp[i][j] = 0
      }
      setSudoku(tmp)
    }
    function decrease(i, j ,sudoku, setSudoku) {
      let tmp = copy(sudoku)
      tmp[i][j]--
      if(tmp[i][j] < 0) {
        tmp[i][j] = 9
      }
      setSudoku(tmp)
    }
    return empty.map( (row, i) => {
      if(navbar === 1) {
        return row.map( (c, j) => {
          return {
            leftClick: () => increase(i, j, createSudoku, setCreateSudoku),
            rightClick: (e) => { 
              e.preventDefault()
              decrease(i, j, createSudoku, setCreateSudoku)
            }
          }
        })
      } else {
        return row.map( (c, j) => {
          return {
            leftClick: () => increase(i, j, puzzle, setPuzzle),
            rightClick: (e) => {
              e.preventDefault() 
              decrease(i, j, puzzle, setPuzzle)
            }
          }
        })
      }
    })
  }

  const handelNavPuzzle = () => setNavbar(0)
  const handelNavOwn = () => setNavbar(1)
  const handelNavSign = () => setNavbar(2)
 

  const handleClick = () => {
    setShowSolution(!showSolution)
  };

  const submitSignIn = (event) => {
    event.preventDefault()
  }

  const show = () => {
    if(navbar < 2) {
      return (
        <div>
          <SudokuGrid 
            sudoku={navbar === 0 ? puzzle : createSudoku} 
            nav={navbar} 
            clicks={clicksArray()}
            original={puzzles[selected].puzzle}
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