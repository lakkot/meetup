import React, {Component} from 'react';

import {ErrorAlert} from './Alert';


class NumberOfEvents extends Component {

  state = {
    count: 32,
    alert: 'hidden',
    errorText: ''
  }


  componentDidMount() {
    if (this.props.eventCount < 32) {
      this.setState({ count: this.props.eventCount })
    }
  }

  newCount = (e) =>  {
    const value = parseInt(e.target.value);
    if (value > 0) {
      this.setState({count: value})
      this.props.updateCount(this.props.lat, this.props.lon, value);
      this.setState({alert: 'hidden'})
      this.setState({errorText: ''})


    } else {
      this.setState({alert: 'alert'})
      this.setState({errorText: 'number of events must be more than 0'})
    }

  }



render() {
  const { alert } = this.state;

  return(
    <div className="numberOfEvents">
      <ErrorAlert className={alert} text={this.state.errorText} />
      <div className="numberOfEvents_line">
        <p>show</p>
        <input
          className='number'
          value={this.state.count}
          onChange={e => this.newCount(e)}
        >
        </input>
        <p>events</p>
      </div>

    </div>
  )
}

}

export default NumberOfEvents;