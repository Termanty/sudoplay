import React from 'react';

function style(c, i, j) {
  let style = "borders "
  if ( j % 3 === 2) {
    style += i % 3 === 2 ? "thickBotRight " : "thickRight ";
  } else {
    style += i % 3 === 2 ? "thickBot " : " ";
  }
  return style
}

function numStyle(c) {
  return c ? "visible" : "unvisible"
}

export function Cell({ c, i, j, click }) {
  return (
    <td className={style(c, i, j)}>
      <button onClick={click} className={"innerbutton " + numStyle(c)}>
        {c}
      </button>
    </td>
  )
}