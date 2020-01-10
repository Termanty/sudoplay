export const solveSudoku = function (origin) {
  let solved = false;
  let final = [];
  let tmp = [...origin];

  const checkReady = (num, arr) => {
    if (num > 80) {
      solved = true;
      final = [...arr];
    }
    return solved;
  };

  const kelpaa = (index, arr) => {
    // rivi
    let rivi = Math.floor(index / 9);
    let alku = rivi * 9;
    let testi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = alku; i < alku + 9; i++) {
      if (arr[i] !== 0) {
        if (testi[arr[i]] === 0) { 
            testi[arr[i]]++
        } else {
            return false
        } 
      }
    }

    // sarake
    alku = index % 9;
    testi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = alku; i < 81; i = i + 9) {
      if (arr[i] !== 0) {
        if (testi[arr[i]] === 0) { 
            testi[arr[i]]++
        } else {
            return false
        } 
      }
    }
    
    // ruutu
    let x = Math.floor(index / 27);
    let y = Math.floor(index % 9 / 3);
    alku = x * 27 + y * 3;
    testi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = alku; i < alku + 27; i = i + 9) {
      for (let j = i; j < i + 3; j++) {
        if (arr[j] !== 0) {
            if (testi[arr[j]] === 0) { 
                testi[arr[j]]++
            } else {
                return false
            } 
        }
      }
    }
    
    return true;
  };

  function solver(d) {
    if (checkReady(d, tmp)) {
      return;
    }
    while (origin[d] !== 0) {
      d++;
    }
    ;
    for (let i = 1; i < 10; i++) {
      if (solved) {
        return;
      }
      tmp[d] = i;
      if (kelpaa(d, tmp)) {
        solver(d + 1);
      }
    }
    tmp[d] = 0;
    return;
  }
  solver(0, tmp);
  return final;
};
