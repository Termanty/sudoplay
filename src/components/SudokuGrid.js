import React from 'react';
import { Cell } from './Cell';

export function SudokuGrid({ sudoku, clicks, nav, original, solution, showSolution }) {

  function rows() {
    return sudoku.map(rowsToCellComponents)
  }

  function rowsToCellComponents(row, i) {
    return (
      <tr key={i}>
        {row.map( (c,j) =>
          <Cell 
            key={10*i+j} 
            c={c} 
            i={i} 
            j={j} 
            click={clicks[i][j]}
            nav={nav}
            original={original}
            solution={solution}
            showSolution={showSolution}
          /> )}
      </tr>)
  }

  return (
    <table className="mystyleThick">
      <tbody>
        {rows()}
      </tbody>
    </table>
  )
}