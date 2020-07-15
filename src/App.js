import React, { Component } from 'react';
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
    console.log('elo')
  } else {
    this.setState({isOffline: ''})
    console.log('obadi')
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

  render() {



    return (
      <div className="App">
        <div className='header'>
          <h3>Meetup-mockup-app w. atatus 1.9</h3>
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
          
          <EventList events={this.state.events}/>
        </div>

      </div>
    );
  }
  }


export default App;
