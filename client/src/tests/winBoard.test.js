import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinBoardComponent from '../components/WinBoard.component';

configure({ adapter: new Adapter() });


describe('<WinBoard />', () => {
  test('should be render react wins', () => {
    const wrapper = shallow(<WinBoardComponent playerWin="React" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').at(0).text()).toBe('React wins!');
    expect(wrapper.find('h1').at(1).text()).toBe('React always wins!');
    const fontAwesomeIconProps = wrapper.find('FontAwesomeIcon').props();
    expect(fontAwesomeIconProps.className).toBe('icon-react');
  });
  
  test('should be render react wins', () => {
    const wrapper = shallow(<WinBoardComponent playerWin="Vue" />);
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text()).toBe('Vue wins!');
    const fontAwesomeIconProps = wrapper.find('FontAwesomeIcon').props();
    expect(fontAwesomeIconProps.className).toBe('icon-vue');
  });

});
