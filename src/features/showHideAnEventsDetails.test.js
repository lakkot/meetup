import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import { mockEvents } from '../mock-events';

import CitySearch from '../CitySearch';
import EventList from '../EventList';



const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('user can see the event list', () => {
      AppWrapper = mount(<App />);
      
    });
    when('user views search result', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
    then('details for event will be collapsed', () => {
      expect(AppWrapper.find('.extra')).toHaveLength(0);
      
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    let AppWrapper;
    given('user can see events list', () => {
      AppWrapper = mount(<App />);
    });
    when('user clicks on the event', () => {
      AppWrapper.update()
      AppWrapper.find('.event_details_show').at(0).simulate('click');
    });
    then('event details are shown', () => {
      expect(AppWrapper.find('.extra')).toHaveLength(1);
      
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let AppWrapper;
    given('user can see events list', () => {
      AppWrapper = mount(<App />);
    });

    and('details for the event are visible', () => {
      AppWrapper.update()
      AppWrapper.find('.event_details_show').at(0).simulate('click');  
    })

    when('user clinks on the -hide details- button', () => {
      AppWrapper.find('.event_details_hide').at(0).simulate('click');  

    });
    then('details of the event are collapsed', () => {
      expect(AppWrapper.find('.extra')).toHaveLength(0);
      
    });
  });
  
});