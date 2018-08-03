import actionTypes from './actionTypes';

export function movePlayer(squareId) {
  // if (squareId === undefined || squareId === '') return { type: '' };

  return {
    type: actionTypes.MOVE,
    squareId,
  };
}

export function newGame() {
  return {
    type: actionTypes.NEW,
  };
}
