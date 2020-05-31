import React, { Component } from 'react';

class CitySearch extends Component {
  
  state = {
    query: 'Devil city',
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

  handleInputChanged = (event) => {
    const newValue = event.target.value;
    this.setState({ query: newValue })
  }

  handleItemClicked = (string) => {
    this.setState({ query: string})
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
            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string)}>{item.name_string}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;