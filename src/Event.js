import React, { Component } from 'react';
import './Event.css'

class Event extends Component {
  state = {
    showdetails: 'hidden',
    hidedetails: '',
    event: {
      "created": 1562337136000,
      "duration": 10800000,
      "id": "wwtgqrybckbsb",
      "name": "Vue.js // Berlin",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1594746000000,
      "local_date": "2020-07-14",
      "local_time": "19:00",
      "updated": 1583403063000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 7,
      "venue": {
      "id": 26115111,
      "name": "Honeypot GmbH",
      "lat": 52.49869918823242,
      "lon": 13.448701858520508,
      "repinned": false,
      "address_1": "Schlesische Str. 26 Aufgang B",
      "city": "Berlin",
      "country": "de",
      "localized_country_name": "Germany"
      },
      "is_online_event": false,
      "group": {
      "created": 1485860967000,
      "name": "Vue.js // Berlin",
      "id": 22176763,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "Vue-js-Berlin",
      "who": "Vue'sers",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/Vue-js-Berlin/events/wwtgqrybckbsb/",
      "description": "<p>Lets talk about Vue.js the Vue.js ecosystem!</p> <p>**** Presentation ****</p> <p>TBA</p> <p>We will have Coffee, Mate, Beer …and probably Pizza!</p> <p>**** Code of Conduct ****<br/>We follow the Berlin Code Of Conduct and expect every attendee to do the same<p>",
      "visibility": "public",
      "member_pay_fee": false
      }
  }

  showDetails = () => {
    this.setState({showdetails: ''})
    this.setState({hidedetails: 'hidden'})

  }

  hideDetails= () => {
    this.setState({showdetails: 'hidden'})
    this.setState({hidedetails: ''})


  }

  render() {
    const { event } = this.props;
    //const { event } = this.state;
    const { showdetails, hidedetails } = this.state;
    return (
      <div className='event'>
        <p className='event-date'>{event.local_time} - {event.local_date}</p>
        <h5 className='event-name'>{event.name}</h5>
        <p className='event-group_name'>{event.group.name}</p>
        <p className='event-people_number'>{event.yes_rsvp_count} people are going</p>
        <p className={`${showdetails} event-details`} dangerouslySetInnerHTML={{ __html: event.description }}></p>
        <a className={`${showdetails} event-link`} href={event.link}>Event Link</a>
        <div className='event-pane'>
          <button className={`${hidedetails} event_details_show`} onClick={() => this.showDetails()}>Details</button>
          <button className={`${showdetails} event_details_hide`} onClick={() => this.hideDetails()} >Hide details</button>
        </div>
      </div>
    );
  }
}

export default Event;


/*
        <p className='event-group_name'>{event.group.name}</p>
*/