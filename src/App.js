import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const searchparams = window.location.search;
  const urlParams = new URLSearchParams(searchparams);
  const code = urlParams.get('code')
  if (!code) {
    window.open('https://secure.meetup.com/oauth2/authorize?client_id=bt14a1nk1ggt2ckt29fd56kfut&response_type=code&redirect_uri=https://lakkot.github.io/meetup/', '_self')
  }  
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey. It's my Mockup-Meetup app!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
