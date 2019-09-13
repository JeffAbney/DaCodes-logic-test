function getAnswer(N, M) {
  let squares = N * M;
  let sqrObj = {};
  let x = 0;
  let y = 0;
  let dir = 'R';

  function turnRight() {
    switch (dir) {
      case 'R':
        dir = 'D';
        break;
      case 'D':
        dir = 'L';
        break;
      case 'L':
        dir = 'U';
        break;
      case 'U':
        dir = 'R';
        break;
      default: dir = null;
    }
  }

  function goToNextSqr() {
    switch (dir) {
      case 'R':
        ++y;
        break;
      case 'D':
        ++x;
        break;
      case 'L':
        --y;
        break;
      case 'U':
        --x
        break;
      default: console.log("problem moving to next square.")
    }
  }

  for (let i = 0; i < squares; i++) {

    if (i === squares - 1) {
      console.log("Direction", dir)
    }

    if (dir === 'R') {
      if (y >= M - 1 || sqrObj.hasOwnProperty([x, y + 1])) {
        turnRight();
      }

    } else if (dir === 'D') {
      if (x >= N - 1 || sqrObj.hasOwnProperty([x + 1, y])) {
        turnRight();
      }

    } else if (dir === 'L') {
      if (y === 0 || sqrObj.hasOwnProperty([x, y - 1])) {
        turnRight();
      }

    } else if (dir === 'U') {
      if (x === 0 || sqrObj.hasOwnProperty([x - 1, y])) {
        turnRight();
      }
    }
    sqrObj[[x, y]] = dir;

    goToNextSqr();
  }
  console.log(sqrObj);
}

getAnswer(1, 7);