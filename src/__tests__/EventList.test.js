import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event'





describe('generate list of events', () => {

  /*
  test('render correct number of events', () => { 
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{id:1}] });
    expect(EventListWrapper.find(Event)).toHaveLength(1);
  });
  */

 test('render correct number of events', () => {
  const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}/>);
  expect(EventListWrapper.find(Event)).toHaveLength(4);
});


});