import React from 'react';

function style(i, j) {
  let style = "borders "
  if ( j % 3 === 2) {
    style += i % 3 === 2 ? "thickBotRight " : "thickRight ";
  } else {
    style += i % 3 === 2 ? "thickBot " : " ";
  }
  return style
}

function numStyle( c, original, solution, showSolution, nav ) {
  if ( nav === 1 ) {
    return c ? "visible bold" : "unvisible"
  } else {
    if( showSolution ) {
      return original ? "visible bold" : "visible blue "
    } else {
      if ( c === 0 ) {
        return "unvisible"
      } else {
        return original ? "visible bold" : "visible green"
      }
    }   
  }
}

function showNumber(showSolution, solution, c, nav) {
  if ( nav === 1) {
    return c
  } else {
    if ( showSolution ) {
      return solution
    } else {
      return c
    }

  }
}

export function Cell({ c, i, j, click, original, solution, showSolution, nav }) {
  return (
    <td className={style(i, j)}>
      <button 
      onClick={click} 
      className={"innerbutton " + numStyle(c, original[i][j], solution[i][j], showSolution, nav)}
      >
        {showNumber(showSolution, solution[i][j], c, nav)}
      </button>
    </td>
  )
}