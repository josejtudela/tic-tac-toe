import uuid from 'uuid';
import checkWin from '../utils/checkWinners';
import actionTypes from '../actions/actionTypes';

const squares = [];
for (let i = 0; i <= 8; i += 1) {
  squares.push({ id: uuid(), value: 0 });
}

export const initialState = {
  squares,
  turnPlayer: 1,
  playerWin: false,
};

function reducer(state = initialState, action) {
  let newSquares = [];
  switch (action.type) {
    case actionTypes.MOVE:
      newSquares = state.squares.map((square) => {
        if (square.id === action.squareId) {
          return {
            id: square.id,
            value: state.turnPlayer,
          };
        }
        return {
          ...square,
        };
      });

      return {
        ...state,
        turnPlayer: state.turnPlayer === 1 ? 2 : 1,
        playerWin: checkWin(newSquares),
        squares: newSquares,
      };
    case actionTypes.NEW:
      newSquares = state.squares.map(square => ({ ...square, value: 0 }));
      return {
        ...state,
        turnPlayer: 1,
        playerWin: false,
        squares: newSquares,
      };
    default:
      break;
  }
  return state;
}

export default reducer;
