import React from 'react';
import ReactDOM from 'react-dom';

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

  const mystyleThick = {
    border: "3px solid black",
    borderCollapse: "collapse"
  }

  const border1 = {
    border: "1px solid black",
    borderCollapse: "collapse",
    paddingLeft: "5px",
    paddingRight: "5px"
  }

  const border2 = {
    border: "1px solid black",
    borderBottom: "3px solid black",
    borderCollapse: "collapse",
    paddingLeft: "5px",
    paddingRight: "5px"
  }

  const border3 = {
    border: "1px solid black",
    borderRight: "3px solid black",
    borderCollapse: "collapse",
    paddingLeft: "5px",
    paddingRight: "5px"
  }

  const border4 = {
    border: "1px solid black",
    borderBottom: "3px solid black",
    borderRight: "3px solid black",
    borderCollapse: "collapse",
    paddingLeft: "5px",
    paddingRight: "5px"
  }




  for (let i = 0; i < lista.length; i = i + 9) {
    const keko = [];
    let styleBox = {};


    for (let j = i; j < i + 9; j++) {
      if ((j % 3) === 2) {
        styleBox = (i / 9) % 3 === 2 ? border4 : border3; 
      } else {
        styleBox = (i / 9) % 3 === 2 ? border2 : border1;
      }

      keko.push(<td style={styleBox} key={j}>{vaikein[j] === 0 ? " " : vaikein[j]}</td>);
    }
    items.push(<tr key={i}>{keko}</tr>)
  }

  return (
    <table style={mystyleThick}>
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


