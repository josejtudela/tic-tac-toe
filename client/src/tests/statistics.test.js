import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import Statistics from '../components/Statistics.component';

configure({ adapter: new Adapter() });

// jest.mock('axios');

describe('<Statistics />', () => {
  test('should be selectable by class "girdStatistics"',() => {
    const wrapper = mount(<Statistics />);

    expect(wrapper).toMatchSnapshot();
    wrapper.find('div').at(0).hasClass('girdStatistics');
    wrapper.find('div').at(1).hasClass('girdReact');
  });
});
