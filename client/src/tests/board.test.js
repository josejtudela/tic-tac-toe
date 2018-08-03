import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Board } from '../components/Board.component';
import { initialState } from '../reducers/game';
import { newGame } from '../actions/game';

configure({ adapter: new Adapter() });

describe('<Board />', () => {
  test('Should be render render with default squares', () => {
    const mockOnHandleReset = jest.fn();
    const wrapper = shallow(
      <Board  
        squares={initialState.squares}
        turnPlayer={initialState.turnPlayer}
        playerWin={initialState.playerWin}
        onHandleReset={mockOnHandleReset}
      />)

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('h2').text()).toBe('Player One');
      expect(wrapper.find('button').text()).toBe('Reset');
  });

  test('Should be render render with one square setup', () => {
    const mockOnHandleReset = jest.fn();
    initialState.squares[0].value = 1;
    initialState.turnPlayer = 2;
    const wrapper = shallow(
      <Board  
        squares={initialState.squares}
        turnPlayer={initialState.turnPlayer}
        playerWin={initialState.playerWin}
        onHandleReset={mockOnHandleReset}
      />)

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('h2').text()).toBe('Player Two');
      expect(wrapper.find('button').text()).toBe('Reset');
  });
});

describe('Handle Button', () => {
  test('simulate click button reset', () => {
    const mockOnHandleReset = jest.fn(newGame);
    const wrapper = shallow(
      <Board  
        squares={initialState.squares}
        turnPlayer={initialState.turnPlayer}
        playerWin={initialState.playerWin}
        onHandleReset={mockOnHandleReset}
      />)

    wrapper.find('button').simulate('click');
    expect(mockOnHandleReset).toHaveBeenCalled();
  });
});

