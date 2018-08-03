import reducer, { initialState } from '../reducers/game';
import actionTypes from '../actions/actionTypes';

describe('Games reducer', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should return current state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('it should handle NEW_GAME', () => {
    expect(reducer(initialState, {
      type: actionTypes.NEW,
    })).toEqual(initialState);
  });

  test('it should handle MOVE_PLAYER', () => {
    expect(reducer(initialState, {
      type: actionTypes.MOVE,
      squareId: initialState.squares[0].id,
    })).toEqual(
      {
        squares: [
          { id: 'id0', value: 1},
          { id: 'id1', value: 0},
          { id: 'id2', value: 0},
          { id: 'id3', value: 0},
          { id: 'id4', value: 0},
          { id: 'id5', value: 0},
          { id: 'id6', value: 0},
          { id: 'id7', value: 0},
          { id: 'id8', value: 0}
        ],
        turnPlayer: 2,
        playerWin: false,
      },
    );
  });
  test('should change state and return player win', () => {
    initialState.squares[0].value = 1;
    initialState.squares[1].value = 1;
    // squares[2].value = 1;

    expect(reducer(initialState, {
      type: actionTypes.MOVE,
      squareId: initialState.squares[2].id,
    })).toEqual(
      {
        squares: [
          { id: 'id0', value: 1},
          { id: 'id1', value: 1},
          { id: 'id2', value: 1},
          { id: 'id3', value: 0},
          { id: 'id4', value: 0},
          { id: 'id5', value: 0},
          { id: 'id6', value: 0},
          { id: 'id7', value: 0},
          { id: 'id8', value: 0}
        ],
        turnPlayer: 2,
        playerWin: 'React',
      },
    );
  })

});
