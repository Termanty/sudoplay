import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lista = [
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9,
  1,2,3,4,5,6,7,8,9
];

const vaikein = [
  8,0,0,0,0,0,0,0,0,
  0,0,3,6,0,0,0,0,0,
  0,7,0,0,9,0,2,0,0,
  0,5,0,0,0,7,0,0,0,
  0,0,0,0,4,5,7,0,0,
  0,0,0,1,0,0,0,3,0,
  0,0,1,0,0,0,0,6,8,
  0,0,8,5,0,0,0,1,0,
  0,9,0,0,0,0,4,0,0
];

const SudokuGrid = () => {
  const items = [];

  for (let i = 0; i < lista.length; i = i + 9) {
    const cells = [];
    let borderStyle = {};

    for (let j = i; j < i + 9; j++) {
      if ((j % 3) === 2) {
        borderStyle = (i / 9) % 3 === 2 ? "thickBotRight" : "thickRight"; 
      } else {
        borderStyle = (i / 9) % 3 === 2 ? "thickBot" : "";
      }
      cells.push(<td className={"borders " + borderStyle} key={j}>{vaikein[j] === 0 ? " " : vaikein[j]}</td>);
    }
    items.push(<tr key={i}>{cells}</tr>)
  }

  return (
    <table className="mystyleThick">
      <tbody>
        {items}
      </tbody>
    </table>
  )
}

const App = () => (
  <div>
    <p>Hello World</p>
    <SudokuGrid />
  </div>
)
ReactDOM.render(<App />, document.getElementById('root'));