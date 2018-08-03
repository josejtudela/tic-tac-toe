import uuid from 'uuid';
import findById from '../filters/game';
import { initialState } from '../reducers/game';

const { squares } = initialState;

describe('Filter > Squares', () => {
  test('Should return anything with number input', () => {
    const res = findById(initialState, 123456789);
    expect(res).not.toEqual(squares[0]);
    expect(res).toEqual(undefined);
  });

  test('Should return anything with empty inputs', () => {
    const res = findById();
    expect(res).not.toEqual(squares[0]);
    expect(res).toEqual(undefined);
  });

  test('should return anything square with nonexist id input', () => {
    const res = findById(initialState, uuid());
    expect(res).not.toEqual(squares[0]);
    expect(res).toEqual(undefined);
  });

  test('should return square with the same id', () => {
    const res = findById(initialState, squares[0].id);

    expect(res).toEqual(squares[0]);
  });

  test('check witch parameters are call to filter', () => {
    const res = jest.fn(findById);

    expect(res).not.toHaveBeenCalled();
    res(initialState, squares[0].id);
    expect(res).toHaveBeenCalledWith(initialState, squares[0].id);
  });
});
