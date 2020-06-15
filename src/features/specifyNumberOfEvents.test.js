import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';

import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');



defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppWrapper;
        given('number of events are visible', () => {
          AppWrapper = mount(<NumberOfEvents />);
          
    	});

    	when('user doesn’t specify the number of events she wants to see', () => {
    	});

    	then('number of events is 32', () => {
            expect(AppWrapper.state('count')).toEqual(32);
    	});
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
    	given('user opens the app', () => {
        AppWrapper = mount(<App />);
    	});

    	when('user enters the number of events', () => {
        AppWrapper.update()
        AppWrapper.find('.number').simulate('change', { target: { value: 12 }});
    	});

    	then('specified number of events is shown', () => {
        //AppWrapper.update()
        expect(AppWrapper.state('page')).toEqual(12);

    	});
    });

});


/*

Scenario: User can change the number of events they want to see
    Given user wants to see a specified number of events
    When user enters the number of events
    Then specified number of events is shown

    */