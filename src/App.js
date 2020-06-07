import React, { Component } from 'react';
import './App.css';

import EventList from './EventList'
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {

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
      "created": 1589972142000,
      "duration": 10800000,
      "fee": {
      "accepts": "paypal",
      "amount": 30,
      "currency": "EUR",
      "description": "",
      "label": "Price",
      "required": true
      },
      "id": "270762951",
      "name": "BALLET & CAMERAS | Private Shoot w/ Pro Ballet Dancers - by Carolin Thiergart ",
      "rsvp_limit": 10,
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1593262800000,
      "local_date": "2020-06-27",
      "local_time": "15:00",
      "updated": 1590313764000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 10,
      "venue": {
      "id": 26923185,
      "name": "Washingtonplatz",
      "lat": 52.524192810058594,
      "lon": 13.369093894958496,
      "repinned": false,
      "address_1": "Washingtonpl.",
      "city": "Berlin",
      "country": "de",
      "localized_country_name": "Germany"
      },
      "is_online_event": false,
      "group": {
      "created": 1547591648000,
      "name": "Beazy's Photography and Filmmaking Events Berlin",
      "id": 30933756,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "BeazyBerlin",
      "who": "Creatives",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/BeazyBerlin/events/270762951/",
      "description": "<p>The ballet photo event will be led by Carolin Thiergart and 3 professional ballet dancers (2 females, 1 male) that are graduates from State Ballet School Berlin, now working as professional dancers in theaters and operas.</p> <p>+++ Due to the situation with Covid-19 we are limiting the number of participants. We will also be practicing distancing. Please bring your mask. In addition, the law states that in order to be able to trace the virus, we must compile a list with the first and last names as well as the address of all participating persons. This list will be destroyed after 4 weeks. +++</p> <p>We will meet on Saturday, June 27, 3 PM in front of the entrance of Hauptbahnhof, Washingtonplatz. The Photowalk will cover ca. 5 different modern locations/backgrounds in the center of Berlin.</p> <p>The limited number of participants will enhance the quality of your pictures and will give you the opportunity to network, share experiences &amp; knowledge with other photographers and dancers.<br/>Use this opportunity to create professional photo material for your portfolio. The goal is bringing together like-minded people, dance photographers, and dancers as well as meeting creators with the same passion.</p> <p>Please note that the ticket price was created to support the dancers during those difficult times and to pay the organizers for their amazing work.</p> <p>Depending on the interest, we will be hosting further exclusive photo shooting events (different mottos) in July-September (dates would be announced within the next weeks).</p> <p>Carolin Thiergart is a part-time photographer from Berlin, bringing together ballet, contemporary dance, circus arts, and architecture since 2019. She is a member of the EyeEm Photographer Collective and her photographs have received several awards.</p> ",
      "how_to_find_us": "We will meet on Saturday, June 27, 3 PM in front of the entrance of Hauptbahnhof, Washingtonplatz.",
      "visibility": "public",
      "pro_is_email_shared": false,
      "member_pay_fee": false
      },
      {
      "created": 1590587233000,
      "duration": 7200000,
      "fee": {
      "accepts": "paypal",
      "amount": 30,
      "currency": "EUR",
      "description": "",
      "label": "Price",
      "required": true
      },
      "id": "270904033",
      "name": "Streetstyle & portraits - model sharing - small group - available light",
      "rsvp_limit": 5,
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1591459200000,
      "local_date": "2020-06-06",
      "local_time": "18:00",
      "updated": 1590612660000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 4,
      "venue": {
      "id": 26925497,
      "name": "Hausvogteiplatz",
      "lat": 52.51325225830078,
      "lon": 13.3970308303833,
      "repinned": true,
      "address_1": "Hausvogteipl.",
      "city": "Berlin",
      "country": "de",
      "localized_country_name": "Germany"
      },
      "is_online_event": false,
      "group": {
      "created": 1487235725000,
      "name": "Berlin Photography & Portrait & Photoshop Meetup",
      "id": 22414572,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "Berlin-Photography-Portrait-Photoshop-Meetup",
      "who": "Photographers",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/Berlin-Photography-Portrait-Photoshop-Meetup/events/270904033/",
      "description": "<p>Hey photographers,</p> <p>finally the first small meetup this year (we will keep the distance to each other!).</p> <p>I could win the beautiful Daria for our meetup (the girl on the cover photo).</p> <p>This is a model sharing, so I will not teach or explain something, we spend great time together exchanging/talking and taking photos of Daria.</p> <p>Please find more of my photos and photos of Daria on my instagram account, unfortunately the upload on meetup crashes every time I try to upload more photos",
      "how_to_find_us": "Let us meet outside the metro station U2-Hausvogteiplatz. There are many nice locations nearby including the famous Gendarmenmarkt.",
      "visibility": "public_limited",
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
      "description": "<p>Lets talk about Vue.js the Vue.js ecosystem!</p> <p>**** Presentation ****</p> <p>TBA</p> <p>We will have Coffee, Mate, Beer …and probably Pizza!</p>",
      "how_to_find_us": "Inner Yard, Ground Floor (yeah!) ",
      "visibility": "public",
      "member_pay_fee": false
      },
      {
      "created": 1590058223000,
      "duration": 7200000,
      "id": "270783974",
      "name": "public virtual session library",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1596232800000,
      "local_date": "2020-08-01",
      "local_time": "00:00",
      "updated": 1590058239000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 1,
      "is_online_event": false,
      "group": {
      "created": 1562664536000,
      "name": "On data and design – Berlin",
      "id": 32349975,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "ondataanddesign-Berlin",
      "who": "DataVizers",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/ondataanddesign-Berlin/events/270783974/",
      "description": "<p>Dear On Data And Design People</p> <p>I hope that everyone is fine and getting slowly back to normality.</p> <p>I would like to say hi and that we did not forget you! On Data and Design will probably continue to hold sessions starting in autumn. (I am still evaluating if the summer would be feasible in some places) It would be really refreshing to meet some faces in reality again. :)</p> <p>Prototyping idea in the meantime:<br/>It's really busy online right now, isn't it? Every museum, every conference and every organizer is represented in an online streaming. Add to that the numerous web meetings given by the daily work. All in all a lot of screen time. So, can we profit from all the captured talks?</p> <p>I thought that we could imagine the system a bit differently.</p> <p>How about creating a video archive/list of the best online sessions we've joined in the past?</p> <p>The idea is that we create a publicly accessible list of the most exciting talks/videos on data and design. A kind of online crowd collected list.</p> <p>Would you like to be part of it?</p> <p>If so, please add you favourite talks over the input stream",
      "visibility": "public",
      "member_pay_fee": false
      },
      {
      "created": 1578066775000,
      "duration": 10800000,
      "id": "267613750",
      "name": "BeazyMeet #17 - STREET STYLE - Photography Event Berlin",
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1597482000000,
      "local_date": "2020-08-15",
      "local_time": "11:00",
      "updated": 1588350325000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 171,
      "venue": {
      "id": 26766900,
      "name": "RAW-Gelände",
      "lat": 52.50728225708008,
      "lon": 13.453980445861816,
      "repinned": true,
      "address_1": "Revaler Str. 99",
      "city": "Berlin",
      "country": "de",
      "localized_country_name": "Germany"
      },
      "is_online_event": false,
      "group": {
      "created": 1547591648000,
      "name": "Beazy's Photography and Filmmaking Events Berlin",
      "id": 30933756,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "BeazyBerlin",
      "who": "Creatives",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/BeazyBerlin/events/267613750/",
      "description": "<p>PLEASE RSVP USING THE FOLLOWING LINK: <a href='https://events.beazy.co/beazymeet-16-street-style/' class='linkified'>https://events.beazy.co/beazymeet-16-street-style/</a></p> <p>-----</p> <p>Hello everyone,<br/>We've chosen a few special locations and invited tons of models, dancers, gymnasts, freerunners and many other talented artists to join us.</p> <p>This event is for everyone, both beginners and professionals creatives of all kinds. Everybody is welcome! Expect to meet many new people and leave with hundreds of amazing shots!<br/>We will all meet at our first location.</p> <p>Newcomers, don't be confused by the chaos! Simply look around and see what's happening: different groups of people shooting a little bit everywhere, portraits, long-exposure, architecture, and many other cool things. We recommend approaching the group and asking what they're doing, you might learn something and even meet new talents to collaborate with.</p> <p>We'll meet in RAW-Gelände complex at 11 AM.</p> <p>IMPORTANT!<br/>Please post all of your photos here so the models also have access to them",
      "how_to_find_us": "We will be waiting with a big Beazy sign!",
      "visibility": "public",
      "pro_is_email_shared": false,
      "member_pay_fee": false
      },
      {
      "created": 1589976463000,
      "duration": 7200000,
      "id": "270763755",
      "name": "Wie du dein (Freelance-) Business mit Personal Branding wachsen lässt",
      "rsvp_limit": 50,
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1593018000000,
      "local_date": "2020-06-24",
      "local_time": "19:00",
      "updated": 1589976463000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 10,
      "is_online_event": false,
      "group": {
      "created": 1560518037000,
      "name": "WordPress Online Meetup Deutschland",
      "id": 32171872,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "WordPress-Online-Meetup-Deutschland",
      "who": "WordPress Fans",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/WordPress-Online-Meetup-Deutschland/events/270763755/",
      "description": "<p>In unserem Juni-Meetup geht´s um Branding:</p> <p>Hast du dich jemals gefragt warum es für manche Menschen so einfach erscheint neue Kunden, einen neuen Job oder auch ganze Lobeshymnen zu bekommen?<br/>Irgendwie läuft für sie alles immer glatt. Es scheint als wäre für diese Menschen alles leicht.<br/>Natürlich hat niemand ein perfektes Leben in dem nie etwas schief läuft, aber diese Menschen haben einiges gemeinsam:</p> <p>Sie stechen aus der Masse. Man erinnert sich an sie. Alle Leute kennen sie.<br/>Sie haben eine starke „Personal Brand“.</p> <p>Nun, es nicht so, dass du laut und bunt gekleidet sein musst, damit sich Leute an dich erinnern.<br/>Du musst lediglich eine starke Personal Brand entwickeln.<br/>In diesem Talk zeige ich dir warum du jetzt an deiner Personal Brand arbeiten solltest um dein (Freelance-) Business voran zu bringen und wie du eine authentische Personal Brand aufbauen kannst.</p> <p>Danach ist wie üblich wieder eine offene Diskussions-/Austauschrunde für alle WordPress-Themen.</p> <p>19:00 Vorstellungsrunde<br/>19:15 Vortrag<br/>20:30 Frag die Community</p> <p>Unser WordPress-Treffen findet online via Zoom statt",
      "visibility": "public",
      "member_pay_fee": false
      },
      {
      "created": 1541802392000,
      "duration": 43140000,
      "id": "xlwrlqybcjbjb",
      "name": "HackBraten - build a product in a day",
      "rsvp_limit": 10,
      "date_in_series_pattern": false,
      "status": "upcoming",
      "time": 1591437600000,
      "local_date": "2020-06-06",
      "local_time": "12:00",
      "updated": 1541802392000,
      "utc_offset": 7200000,
      "waitlist_count": 0,
      "yes_rsvp_count": 2,
      "venue": {
      "id": 25988544,
      "name": "changing locations",
      "lat": 52.510467529296875,
      "lon": 13.38200569152832,
      "repinned": false,
      "address_1": "change",
      "city": "Berlin",
      "country": "de",
      "localized_country_name": "Germany"
      },
      "is_online_event": false,
      "group": {
      "created": 1449485636000,
      "name": "Hackathons and Startup Challenges in Berlin and beyond",
      "id": 19189905,
      "join_mode": "open",
      "lat": 52.52000045776367,
      "lon": 13.380000114440918,
      "urlname": "Hackathons-Berlin-and-beyond",
      "who": "Hackathletes",
      "localized_location": "Berlin, Germany",
      "state": "",
      "country": "de",
      "region": "en_US",
      "timezone": "Europe/Berlin"
      },
      "link": "https://www.meetup.com/Hackathons-Berlin-and-beyond/events/xlwrlqybcjbjb/",
      "description": "<p>HackBraten is a weekly non-commercial mini Hackathon each Saturday in changing locations within Berlin.</p> <p>Be part of a hand selected interdisciplinary team and build an exciting new product in 24 hours.</p> <p>We provide a casual setting with enough time to get to know, and learn from each other without pressure.<br/>Our core values are HAVING A GOOD TIME and SHIPPING A PRODUCT</p>",
      "visibility": "public",
      "member_pay_fee": false
      }
    ]
  }
/*
  const searchparams = window.location.search;
  const urlParams = new URLSearchParams(searchparams);
  const code = urlParams.get('code')
  if (!code) {
    window.open('https://secure.meetup.com/oauth2/authorize?client_id=bt14a1nk1ggt2ckt29fd56kfut&response_type=code&redirect_uri=https://lakkot.github.io/meetup/', '_self')
  }  
  */
  

  updateEvents = () => {

  }

  render() {
    let eventCount = this.state.events.length;
    let eventlist = this.state.events;
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <EventList events={eventlist}/>
        <NumberOfEvents eventCount={eventCount}/>
      </div>
    );
  }
  }


export default App;
