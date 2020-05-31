import React from 'react';
import './App.css';

import EventList from './EventList'
import CitySearch from './CitySearch';

function App() {
/*
  const searchparams = window.location.search;
  const urlParams = new URLSearchParams(searchparams);
  const code = urlParams.get('code')
  if (!code) {
    window.open('https://secure.meetup.com/oauth2/authorize?client_id=bt14a1nk1ggt2ckt29fd56kfut&response_type=code&redirect_uri=https://lakkot.github.io/meetup/', '_self')
  }  
  */
  
  return (
    <div className="App">
      <CitySearch />
      <EventList />
    </div>
  );
}

export default App;
