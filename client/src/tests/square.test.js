import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import uuid from 'uuid';
import { initialState } from '../reducers/game';
import { movePlayer } from '../actions/game';
import { Square } from '../components/Square.component';

configure({ adapter: new Adapter() });

function setup(squareValue) {
  const props = {
    squareData: { id: uuid(), value: squareValue },
    onHandleMovePlayer: jest.fn(),
  };

  const enzymeWrapper = mount(<Square {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<Square />', () => {
  test('should render square empty without squareValue', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper).toMatchSnapshot();
    expect(enzymeWrapper.find('div').hasClass('borderSquareEmpty')).toBe(true);
    expect(enzymeWrapper.find('div').prop('role')).toEqual('button');

    const fontAwesomeIconProps = enzymeWrapper.find('FontAwesomeIcon').props();
    expect(fontAwesomeIconProps.className).toBe('icon-hand');
  });

  test('should render square empty', () => {
    const { enzymeWrapper } = setup(0);

    expect(enzymeWrapper).toMatchSnapshot();
    expect(enzymeWrapper.find('div').hasClass('borderSquareEmpty')).toBe(true);
    expect(enzymeWrapper.find('div').prop('role')).toEqual('button');

    const fontAwesomeIconProps = enzymeWrapper.find('FontAwesomeIcon').props();
    expect(fontAwesomeIconProps.className).toBe('icon-hand');
  });

  test('should render square react icon', () => {
    const { enzymeWrapper } = setup(1);

    expect(enzymeWrapper).toMatchSnapshot();
    expect(enzymeWrapper.find('div').hasClass('borderSquare1')).toBe(true);
    expect(enzymeWrapper.find('div').prop('role')).toEqual('button');

    const fontAwesomeIconProps = enzymeWrapper.find('FontAwesomeIcon').props();
    expect(fontAwesomeIconProps.className).toBe('icon-react');
  });

  test('should render square vue icon', () => {
    const { enzymeWrapper } = setup(2);

    expect(enzymeWrapper).toMatchSnapshot();
    expect(enzymeWrapper.find('div').hasClass('borderSquare2')).toBe(true);
    expect(enzymeWrapper.find('div').prop('role')).toEqual('button');

    const fontAwesomeIconProps = enzymeWrapper.find('FontAwesomeIcon').props();
    expect(fontAwesomeIconProps.className).toBe('icon-vue');
  });

  test('handle onclick with square value equal 0', () => {
    const mockonHandleMovePlayer = jest.fn(movePlayer);
    const value = { id: initialState.squares[0].id, value: 0 };
    const wrapper = shallow(
      <Square
        squareData={value}
        onHandleMovePlayer={mockonHandleMovePlayer}
      />);


    expect(wrapper.find('div')).toHaveLength(1);

    wrapper.find('div').simulate('click', value);
    expect(mockonHandleMovePlayer).toHaveBeenCalled();
  });

  test('handle onclick with square value is 1 or 2', () => {
    const mockonHandleMovePlayer = jest.fn(movePlayer);
    const value = { id: initialState.squares[0].id, value: 2 };
    const wrapper = shallow(
      <Square
        squareData={value}
        onHandleMovePlayer={mockonHandleMovePlayer}
      />);


    expect(wrapper.find('div')).toHaveLength(1);

    wrapper.find('div').simulate('click', value);
    expect(mockonHandleMovePlayer).not.toHaveBeenCalled();
  });
});
