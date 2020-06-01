import React, { Component } from 'react';
import './EventList.css';


import Event from './Event'


class EventList extends Component {

  state = {
    events: [
      {
        "created": 1515424197000,
        "duration": 10800000,
        "id": "bcvtkrybcjbxb",
        "name": "Informal get-together of Kotlin developers in Berlin",
        "date_in_series_pattern": false,
        "status": "upcoming",
        "time": 1592499600000,
        "local_date": "2020-06-18",
        "local_time": "19:00",
        "updated": 1572729815000,
        "utc_offset": 7200000,
        "waitlist_count": 0,
        "yes_rsvp_count": 14,
        "is_online_event": false,
        "group": {
        "created": 1479909210000,
        "name": "Kotlin User Group Berlin",
        "id": 21262742,
        "join_mode": "open",
        "lat": 52.52000045776367,
        "lon": 13.380000114440918,
        "urlname": "kotlin-berlin",
        "who": "Kotlin fans",
        "localized_location": "Berlin, Germany",
        "state": "",
        "country": "de",
        "region": "en_US",
        "timezone": "Europe/Berlin"
        },
        "link": "https://www.meetup.com/kotlin-berlin/events/bcvtkrybcjbxb/",
        "description": "<p>Line-up: TBA</p> ",
        "visibility": "public",
        "member_pay_fee": false
        },
        {
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
      
    ]
  }


  render() {
    //const { events } = this.props;
    const { events } = this.state;

    return (
      <ul className="EventList">
        {events.map(event =>
          <li key={event.id}> 
            <Event event={event} />
          </li>
        )}
      </ul>
    );
  }
}

export default EventList;


/*

        */