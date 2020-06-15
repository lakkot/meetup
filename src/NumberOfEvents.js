import React, {Component} from 'react';

class NumberOfEvents extends Component {

  state = {
    count: 32,
    alert: 'hidden'
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

    } else {
      this.setState({alert: 'alert'})
    }

  }



render() {
  const { alert } = this.state;

  return(
    <div>
      <p className={alert} >number of events must be more than 0</p>
      <input
        className='number'
        value={this.state.count}
        onChange={e => this.newCount(e)}
      >
      </input>
    </div>
  )
}

}

export default NumberOfEvents;