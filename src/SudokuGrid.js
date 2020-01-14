import React from 'react';
import './index';

function thickerBorders(i, j) {
  if ((j % 3) === 2) {
    return (i / 9) % 3 === 2 ? "thickBotRight" : "thickRight";
  }
  else {
    return (i / 9) % 3 === 2 ? "thickBot" : "";
  }
}

export const SudokuGrid = ({ sudoku }) => {
  
  const items = [];
  for (let i = 0; i < sudoku.length; i = i + 9) {
    const cells = [];
    for (let j = i; j < i + 9; j++) {
      cells.push(<td
        key={j}
        style={sudoku[j] === 0 ? {color: "white"} : {color: "black"}}
        className={"borders " + thickerBorders(i, j)}>   
          {sudoku[j]}
        </td>);
    }
    items.push(<tr key={i}>{cells}</tr>);
  }

  return (
    <table className="mystyleThick">
      <tbody>
        {items}
      </tbody>
    </table>);
}