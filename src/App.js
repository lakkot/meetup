import React, { Component } from 'react';
import './App.css';

import EventList from './EventList'
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockEvents } from './mock-events';
import { getEvents } from './api';

class App extends Component {

  state = {
    events: []
  }
/*
  const searchparams = window.location.search;
  const urlParams = new URLSearchParams(searchparams);
  const code = urlParams.get('code')
  if (!code) {
    window.open('https://secure.meetup.com/oauth2/authorize?client_id=bt14a1nk1ggt2ckt29fd56kfut&response_type=code&redirect_uri=https://lakkot.github.io/meetup/', '_self');
    return null;
  }  
  */
  

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then(events => this.setState({ events }));
  }

  render() {
    //let eventCount = this.state.events.length;
    const {events} = this.state;
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    );
  }
  }


export default App;
