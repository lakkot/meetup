import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event'





describe('see information about given event', () => {
  
  let EventWrapper;
  //EventWrapper.setProps()

  beforeAll(() => {
    EventWrapper = shallow(<Event />);

  });


  test('correct data is displayed', () => {
    expect(EventWrapper.find('.event-name').text()).toBe('Vue.js // Berlin');
  });
  
  test('event container exists', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('details are hidden by default', () => {
    expect(EventWrapper.state('showdetails')).toBe('hidden');
  });

  test('clicking a button shows details', () => {
    EventWrapper.find('.event_details_show').simulate('click');
    expect(EventWrapper.state('showdetails')).toBe('');
  })

  

});