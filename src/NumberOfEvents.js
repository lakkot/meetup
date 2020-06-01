import React, {Component} from 'react';

class NumberOfEvents extends Component {

  state = {
    count: 32
  }

  componentDidMount() {
    const {eventCount} = this.props;
    if (eventCount < 32) {
      this.setState({count: eventCount});
    }

  }

  newCount = (e) =>  {
    const value = e.target.value;
    this.setState({count: value})
    console.log(value)
  }


render() {
  const { count } = this.state;
  return(
    <div>
      <input
        className='number'
        value={count}
        onChange={this.newCount}
      >
      </input>
    </div>
  )
}

}

export default NumberOfEvents;