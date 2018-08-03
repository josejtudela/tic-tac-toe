export default function checkWin(ArraySquares) {
  if (ArraySquares === undefined || ArraySquares === '') return false;

  const squares = [...ArraySquares];

  const rowsPlayerOne = [];
  const rowsPlayerTwo = [];
  const columnsPlayerOne = [];
  const columnsPlayerTwo = [];
  const diagonalsPlayerOne = [];
  const diagonalsPlayerTwo = [];
  let playerWin = false;
  for (let i = 0; i <= 6; i += 3) {
    rowsPlayerOne[i / 3] = squares[i].value === 1
    && squares[i + 1].value === 1
    && squares[i + 2].value === 1;

    rowsPlayerTwo[i / 3] = squares[i].value === 2
    && squares[i + 1].value === 2
    && squares[i + 2].value === 2;

    columnsPlayerOne[i / 3] = squares[i / 3].value === 1
    && squares[i / 3 + 3].value === 1
    && squares[i / 3 + 6].value === 1;

    columnsPlayerTwo[i / 3] = squares[i / 3].value === 2
    && squares[i / 3 + 3].value === 2
    && squares[i / 3 + 6].value === 2;

    if (rowsPlayerOne[i / 3] || columnsPlayerOne[i / 3]) {
      playerWin = 'React';
      return playerWin;
    }
    if (rowsPlayerTwo[i / 3] || columnsPlayerTwo[i / 3]) {
      playerWin = 'Vue';
      return playerWin;
    }
  }

  diagonalsPlayerOne[0] = squares[0].value === 1
  && squares[8].value === 1
  && squares[4].value === 1;

  diagonalsPlayerOne[1] = squares[2].value === 1
  && squares[6].value === 1
  && squares[4].value === 1;

  diagonalsPlayerTwo[1] = squares[2].value === 2
  && squares[6].value === 2
  && squares[4].value === 2;

  diagonalsPlayerTwo[0] = squares[0].value === 2
  && squares[8].value === 2
  && squares[4].value === 2;

  if (diagonalsPlayerOne[0] || diagonalsPlayerOne[1]) {
    playerWin = 'React';
    return playerWin;
  }
  if (diagonalsPlayerTwo[1] || diagonalsPlayerTwo[0]) {
    playerWin = 'Vue';
    return playerWin;
  }
  return playerWin;
}
