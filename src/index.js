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

const empty = [
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0
]

var ready = false;

const solveSudoku = function(origin) {
  let tmp = []

  if (ready) {return tmp}

  const checkReady = (num, arr) => {
     if (num > 60) {
       ready = true
       if (tmp.length < 10) {
        tmp = [...arr]
       }
     }
     return ready
  }

  const kelpaa = (index, arr) => {
    // rivi
    let rivi = Math.floor(index / 9)
    let alku = rivi * 9
    let testi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i = alku; i < alku + 9; i++) {
      if (arr[i] !== 0 ) { testi[arr[i]]++ }
    }
    for(let i = 0; i < testi.length; i++) {
      if (testi[i] > 1) {
        return false}
    }
    //console.log(testi)

    // sarake
    alku = index % 9
    testi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let i = alku; i < 81; i = i + 9) {
      if (arr[i] !== 0 ) { testi[arr[i]]++ }
    }
    for(let i = 0; i < testi.length; i++) {
      if (testi[i] > 1) {
        return false}
    }
    //console.log(testi)

    // ruutu


    return true
  }

  function solver(d, s) {
    if (checkReady(d, s)) { return }
    while (origin[d] !== 0) { d++ };
    console.log(d)
    //console.log(s)
    for(let i = 1; i < 10; i++) {
      if (ready) { return }
      s[d] = i;
      if (kelpaa(d, s)) {
        solver(++d, [...s])
      }
      if (i === 9) {
       //console.log("täällä")
      }
    }
    return
  }
  solver(0, [...origin])


  return tmp
}


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    //console.log('clicked')
  }

  const setToValue = () => {
    let value = counter + 1
    setCounter(value)
    //console.log(value)
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