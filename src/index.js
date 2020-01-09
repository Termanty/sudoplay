import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SudokuGrid } from './SudokuGrid';

const sudo1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  1, 2, 3, 4, 5, 6, 7, 8, 9
];

const sudo2 = [
  8, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 3, 6, 0, 0, 0, 0, 0,
  0, 7, 0, 0, 9, 0, 2, 0, 0,
  0, 5, 0, 0, 0, 7, 0, 0, 0,
  0, 0, 0, 0, 4, 5, 7, 0, 0,
  0, 0, 0, 1, 0, 0, 0, 3, 0,
  0, 0, 1, 0, 0, 0, 0, 6, 8,
  0, 0, 8, 5, 0, 0, 0, 1, 0,
  0, 9, 0, 0, 0, 0, 4, 0, 0
];


const solveSudoku = function(origin) {
  let tmp = [...origin]
  for(let i = 0; i < tmp.length; i++) {
    tmp[i] = ++tmp[i]
  }
  console.log(tmp)
 
  const checkReady = (num) =>  num < 10 ? false : true

  const solver = function(d) {
    if (checkReady(d)) { return }
    console.log(d)
    return solver(++d)
  }
  solver(0)


  return tmp
}


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  const setToValue = () => {
    let value = counter + 1
    setCounter(value)
    console.log(value)
  }

  const solvedSudoku = solveSudoku(sudo2)

  return (<div>
    <p>Hello World</p>
    <SudokuGrid sudo={sudo2} />
    <button type="button">SOLVE</button>
    <button onClick={handleClick}>click this!</button>
    <button onClick={setToValue}>+ PLUS + {counter}</button>
   
    <SudokuGrid sudo={solvedSudoku} />
  </div>);
}
ReactDOM.render(<App />, document.getElementById('root'));