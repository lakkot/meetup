import React, { Component } from 'react';

import { getSuggestions } from './api';

class CitySearch extends Component {
  
  state = {
    query: '',
    suggestions: [
/*
      {
        "city": "Berlin",
        "country": "de",
        "localized_country_name": "Germany",
        "name_string": "Berlin, Germany",
        "zip": "meetup1",
        "lat": 52.52,
        "lon": 13.38
        },
      {
        "city": "Berlin",
        "country": "us",
        "localized_country_name": "USA",
        "state": "CT",
        "name_string": "Berlin, Connecticut, USA",
        "zip": "06037",
        "lat": 41.61,
        "lon": -72.77
      },
      {
        "city": "Berlin",
        "country": "us",
        "localized_country_name": "USA",
        "state": "NJ",
        "name_string": "Berlin, New Jersey, USA",
        "zip": "08009",
        "lat": 39.76,
        "lon": -74.93
      },
*/
    ]
  }

  handleInputChanged = (event, value) => {
    const newValue = event.target.value;
    this.setState({ query: newValue });
    getSuggestions(value).then(suggestions => this.setState({suggestions}))
  }

  handleItemClicked = (string, lat, lon) => {
    this.setState({ query: string});
    this.props.updateEvents(lat, lon);
  }




  render() {
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>{item.name_string}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;