import React, { Component } from 'react';
import './App.css';

import EventList from './EventList'
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockEvents } from './mock-events';
import { getSuggestions, getEvents } from './api';

class App extends Component {

  state = {
    events: [],
    page: 32,
    lat: '',
    lon: ''
  }

 componentDidMount() {
  getEvents().then(response => this.setState({ events: response }));
}



updateCity = (lat, lon) => {
  getEvents().then(response => this.setState({ events: response, lat, lon }));
}

updateCount = (lat, lon, page) => {
  this.setState({page: page})
  getEvents(lat, lon, page).then(response => this.setState({ events: response }));
  console.log(lat, lon, page)
}


/*
updateEvents = (lat, lon, page) => {
  if (lat && lon) {
    getEvents(lat, lon, this.state.page).then(response =>
      this.setState({ events: response, lat, lon })
    );
  } else if (page) {
    getEvents(this.state.lat, this.state.lon, page).then(response =>
      this.setState({ events: response, page })
    );
  } else {
    getEvents(this.state.lat, this.state.lon, this.state.page).then(
      response => this.setState({ events: response })
    );
  }
};
*/
  updateEventCount = (e) => {
    this.setState({page: e.target.value});
    //this.updateEvents(this.state.lat, this.state.lon, this.state.numberOfEvents);

  }

  render() {
    console.log(this.state.lat);
    console.log(this.state.lon);
    return (
      <div className="App">
        <div className='header'>
          <h3>Meetup-mockup-app</h3>
        </div>
        <div className='content'>
          <CitySearch updateEvents={this.updateCity}/>
          <div className='events-number'>
            <p>show</p>
            <NumberOfEvents 
              className='numbr'
              eventCount={this.state.page} 
              //updateEventCount={this.updateEventCount} 
              updateCount={this.updateCount}
              lat={this.state.lat}
              lon={this.state.lon}
            />
            <p>events</p>
          </div>
          
          <EventList events={this.state.events}/>
        </div>

      </div>
    );
  }
  }


export default App;
