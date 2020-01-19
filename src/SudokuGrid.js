import React from 'react';
import './index';

function style(c, i, j) {
  let style = "borders "
  if ( j % 3 === 2) {
    style += i % 3 === 2 ? "thickBotRight " : "thickRight ";
  } else {
    style += i % 3 === 2 ? "thickBot " : " ";
  }
  style += c ? "visible" : "unvisible"
  return style
}

function rowsToCellComponents(row, i) {
  return (
    <tr key={i}>
      {row.map( (c,j) => <Cell key={10*i+j} c={c} i={i} j={j} /> )}
    </tr>)
}

function Cell({ c, i, j }) {
  return <td className={style(c, i, j)} >{c}</td>
}

function SudokuGrid({ sudoku }) {
  return (
    <table className="mystyleThick">
      <tbody>
        {sudoku.map(rowsToCellComponents)}
      </tbody>
    </table>)
}

export default SudokuGrid;