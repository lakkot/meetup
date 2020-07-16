import React, { Component } from 'react';
import moment from 'moment';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './App.css';

import EventList from './EventList'
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockEvents } from './mock-events';
import { getSuggestions, getEvents, clearToken } from './api';

import {OfflineAlert} from './Alert';


class App extends Component {

  state = {
    events: [],
    page: 32,
    lat: '',
    lon: '',
    isOffline: ''
  }

/*
componentWillMount() {
  const searchparams = window.location.search;
  const urlParams = new URLSearchParams(searchparams);
  const code = urlParams.get('code')
  if (!code) {
    window.open('https://secure.meetup.com/oauth2/authorize?client_id=bt14a1nk1ggt2ckt29fd56kfut&response_type=code&redirect_uri=https://lakkot.github.io/meetup/', '_self')
  }  
}
*/

 componentDidMount() {


  getEvents().then(response => this.setState({ events: response }));
  if (!navigator.onLine) {
    this.setState({isOffline: 'you are now in offline mode, using cached data'})
  } else {
    this.setState({isOffline: ''})
  }
}



updateCity = (lat, lon) => {
  getEvents(lat, lon).then(response => this.setState({ events: response, lat: lat, lon: lon }));
}

updateCount = (lat, lon, page) => {
  this.setState({page: page})
  getEvents(lat, lon, page).then(response => this.setState({ events: response }));
}

updateEventCount = (e) => {
  this.setState({page: e.target.value});
}

delCache = () => {
  clearToken()
}

//chart functions
countEventsOnADate = (date) => {
  let count = 0;
  for (let i = 0; i < this.state.events.length; i += 1) {
    if (this.state.events[i].local_date === date) {
      count += 1;
    }
  }
  return count;
}

getData = () => {
  const next7Days = []; // Create empty array for the next 7 days
  const currentDate = moment(); // Today2020-06-25
  //const currentDate = moment('2020-06-25'); // Today2020-06-25
  // Loop 7 times for next 7 days
  for (let i = 0; i < 7; i += 1) {
    currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
    const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
    // Use the countEventsOnADate function to count #events on this date
    const count = this.countEventsOnADate(dateString);
    next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
  }
  return next7Days;
}



  render() {



    return (
      <div className="App">
        <div className='header'>
          <h3>Meetup-mockup-app w. atatus 2.0</h3>
          <button onClick={this.delCache}>remove token</button>
        </div>
        <div className='content'>
        <OfflineAlert text={this.state.isOffline} />

          <CitySearch updateCity={this.updateCity}/>
          <div className='events-number'>
            
            <NumberOfEvents 
              eventCount={this.state.page} 
              //updateEventCount={this.updateEventCount} 
              updateCount={this.updateCount}
              lat={this.state.lat}
              lon={this.state.lon}
            />
          </div>
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="date" name="date" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>

          <EventList events={this.state.events}/>
        </div>

      </div>
    );
  }
  }


export default App;
