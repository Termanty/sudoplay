const checkRules = (index, arr) => {
    // row
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
    // column
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
    // box
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
    };   
    return true;
};

export const solveSudoku = function (origin) {
  let solved = false;
  let final = [];
  let tmp = [...origin];

  function solver(d) {
    if (d > 80) {
        solved = true;
        final = [...tmp];
        return
    };
    while (origin[d] !== 0) {
      d++;
    };
    for (let i = 1; i < 10; i++) {
      if (solved) {
        return;
      }
      tmp[d] = i;
      if (checkRules(d, tmp)) {
        solver(d + 1)
      }
    }
    tmp[d] = 0;
    return;
  }

  solver(0);

  const twoDimSolution = []
  for(let i = 0; i < 81; i += 9) {
    const row = []
    for(let j = 0; j < 9; j++) {
      row.push(final[i+j])
    }
    twoDimSolution.push(row)
  }
  return twoDimSolution;
}