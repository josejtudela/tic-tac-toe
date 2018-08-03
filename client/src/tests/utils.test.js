import checkWin from '../utils/checkWinners';

const mockSqaures = [];
for (let i = 0; i <= 8; i += 1) {
  mockSqaures.push({ value: Math.floor((Math.random() * 3)) });
}


const winReact = mockSqaures.map(square => ({ ...square, value: 1 }));
const winVue = mockSqaures.map(square => ({ ...square, value: 2 }));
const anythingWins = mockSqaures.map(square => ({ ...square, value: 0 }));
const testReactWin = [{ value: 1 }, { value: 1 },
  { value: 1 }, { value: 2 },
  { value: 2 }, { value: 0 },
  { value: 0 }, { value: 0 },
  { value: 0 }];

describe('Testing function checkWinners', () => {
  test('all input are correct', () => {
    const mockCheckWin = jest.fn(checkWin);

    mockCheckWin(mockSqaures);
    expect(mockCheckWin).toHaveBeenCalled();
  });

  test('call without inputs', () => {
    const mockCheckWin = jest.fn(checkWin);

    expect(mockCheckWin()).toBe(false);
  });

  test('to react wins', () => {
    const mockCheckReactWin = jest.fn(checkWin);

    expect(mockCheckReactWin(testReactWin)).toBe('React');
    expect(mockCheckReactWin(winReact)).toBe('React');
    expect(mockCheckReactWin(winVue)).not.toBe('React');
    expect(mockCheckReactWin(anythingWins)).not.toBe('React');
  });

  test('to vue wins', () => {
    const mockCheckReactWin = jest.fn(checkWin);

    expect(mockCheckReactWin(winVue)).toBe('Vue');
    expect(mockCheckReactWin(winReact)).not.toBe('Vue');
    expect(mockCheckReactWin(anythingWins)).not.toBe('Vue');
  });

  test('anything wins', () => {
    const mockCheckReactWin = jest.fn(checkWin);

    expect(mockCheckReactWin(anythingWins)).toBe(false);
    expect(mockCheckReactWin(winReact)).not.toBe(false);
    expect(mockCheckReactWin(winVue)).not.toBe(false);
  });
});
