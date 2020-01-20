import React from 'react';
import { Cell } from './Cell';

function rows(sudoku) {
  return sudoku.map(rowsToCellComponents)
}

function rowsToCellComponents(row, i) {
  return (
    <tr key={i}>
      {row.map( (c,j) => <Cell key={10*i+j} c={c} i={i} j={j} /> )}
    </tr>)
}

export function SudokuGrid({ sudoku }) {
  return (
    <table className="mystyleThick">
      <tbody>
        {rows(sudoku)}
      </tbody>
    </table>)
}