import React from 'react';

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

export function Cell({ c, i, j }) {
  return <td className={style(c, i, j)}>{c}</td>;
}