import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';



describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  })

  test('check in number of events corresponds to the list', () => {
    NumberOfEventsWrapper.setState({count: '8'})
    expect(NumberOfEventsWrapper.state('count')).toBe('8')
  })

})