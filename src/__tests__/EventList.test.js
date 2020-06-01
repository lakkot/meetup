import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event'





describe('generate list of events', () => {

  let EventListWrapper;
  beforeAll(() => {
    EventListWrapper = shallow(<EventList />);

  });
  

  test('render correct number of events', () => { 
    EventListWrapper.setState({ events: [{id:1}] });
    expect(EventListWrapper.find(Event)).toHaveLength(1);
  });
  
});