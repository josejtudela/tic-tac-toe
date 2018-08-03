import uuid from 'uuid';
import { movePlayer, newGame } from '../actions/game';
import actionTypes from '../actions/actionTypes';

describe('actions', () => {
  test('should create an action to new game', () => {
    const expectedAction = {
      type: actionTypes.NEW,
    };
    expect(newGame()).toEqual(expectedAction);
  });

  test('should create an action to move player', () => {
    const id = uuid();
    const expectedAction = {
      type: actionTypes.MOVE,
      squareId: id,
    };

    expect(movePlayer(id)).toEqual(expectedAction);
  });

  // test('should create an action of {type:""}', () => {
  //   const expectedAction = {
  //     type: '',
  //   };

  //   expect(movePlayer()).toEqual(expectedAction);
  // });
});
