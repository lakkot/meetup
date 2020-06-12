import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event'





describe('see information about given event', () => {
  
  let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={ 
      {
      id: 'wwtgqrybckbsb',
      name: 'Vue.js // Berlin',
      date_in_series_pattern: false,
      status: 'upcoming',
      time: 1594746000000,
      local_date: '2020-07-14',
      local_time: '19:00',
      yes_rsvp_count: 7,
      group: { name: 'Sample Group' },
      link: 'https://www.meetup.com/Vue-js-Berlin/events/wwtgqrybckbsb/',
      description: '<p>Lets talk about Vue.js the Vue.js ecosystem!</p>'
      } 
    }/>);
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


