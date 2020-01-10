import React from 'react';
import './index';

export const SudokuGrid = ({ sudo }) => {
  const items = [];
  for (let i = 0; i < sudo.length; i = i + 9) {
    const cells = [];
    let borderStyle = {};
    for (let j = i; j < i + 9; j++) {
      if ((j % 3) === 2) {
        borderStyle = (i / 9) % 3 === 2 ? "thickBotRight" : "thickRight";
      }
      else {
        borderStyle = (i / 9) % 3 === 2 ? "thickBot" : "";
      }
      cells.push(<td className={"borders " + borderStyle} key={j}>{sudo[j] === 0 ? " " : sudo[j]}</td>);
    }
    items.push(<tr key={i}>{cells}</tr>);
  }
  return (
    <table className="mystyleThick">
      <tbody>
        {items}
      </tbody>
    </table>);
};
