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

export const SudokuGrid = ({ sudo }) => {
  
  const items = [];
  for (let i = 0; i < sudo.length; i = i + 9) {
    const cells = [];
    for (let j = i; j < i + 9; j++) {
      cells.push(<td className={"borders " + thickerBorders(i, j)} key={j}>{sudo[j] === 0 ? " " : sudo[j]}</td>);
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