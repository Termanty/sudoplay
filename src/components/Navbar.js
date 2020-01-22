import React from 'react';

function active(nav, navBarNumber) {
  return nav === navBarNumber ? "activeBar" : "unactiveBar"
}

export function Navbar({ nav, own, puzz, sign }) {

  return (
    <div>
      <button
        key={0}
        className={"button " + active(nav, 0)}
        onClick={puzz}>
          solve puzzle
      </button>
      <button
        key={1}
        className={"button " + active(nav, 1)} 
        onClick={own}>
          create sudo
      </button>
      <button 
        key={2}
        className={"button " + active(nav, 2)} 
        onClick={sign}>
          sing in
      </button>
    </div>
  )
}