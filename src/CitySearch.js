import React, { Component } from 'react';
import './CitySearch.css'

import { getSuggestions } from './api';

class CitySearch extends Component {
  
  state = {
    query: '',
    suggestions: [
    ],
    list: 'derp'
  }

  handleInputChanged = (event, value) => {
    const newValue = event.target.value;
    this.setState({ query: newValue });
    getSuggestions(value).then(suggestions => this.setState({suggestions}))
  }
/*
  handleItemClicked = (string, lat, lon) => {
    this.setState({ query: string});
    this.props.updateEvents(lat, lon);
    this.setState({list: 'hidden'})
  }
*/
handleItemClicked = (value, lat, lon) => {
  this.setState({ query: value, suggestions: [] });
  this.props.updateEvents(lat, lon);
}



  render() {
    const {list}  = this.state;
    return (
      <div className="CitySearch">
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ul className={`suggestions + ${list}`}>
          {this.state.suggestions.map(item =>
            <li key={item.name_string} onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}>{item.name_string}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;