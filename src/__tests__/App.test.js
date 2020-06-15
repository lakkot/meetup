import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';


import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

import { mockEvents } from '../mock-events';




describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});


describe('<App /> integration', () => {
 

  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App lat={1} lon={2}/>);
    AppWrapper.instance().updateCity = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateCity).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateCity).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateCity(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({ events: [{ id: 1, group: {name:''} }, { id: 2, group: {name:''}  }, { id: 3, group: {name:''}  }, { id: 4, group: {name:''}  }] });
    expect(AppWrapper.find('.Event')).toHaveLength(4);
    AppWrapper.unmount();
  });

  test('update List of events after user changes number of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateCount = jest.fn();
    AppWrapper.instance().forceUpdate();
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.instance().newCount({ target: { value: 1 } });
    expect(AppWrapper.instance().updateCount).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateCount).toHaveBeenCalledWith('', '', 1);
    AppWrapper.unmount();
  });

});