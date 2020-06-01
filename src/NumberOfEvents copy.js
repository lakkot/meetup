import React, {useState} from 'react';

function NumberOfEvents(props) {


  const eventsNumber = props.eventCount;

  const countNo = (e) => {
    if (eventsNumber < 32) {
      return eventsNumber;
    } else {
      return 32;
    }
  }


  const [ count, newCount] = useState(countNo())





  

    return(
      <div>
        <input
          className='number'
          value={count}
          onChange={e => newCount(e.target.value)}
        >
        </input>
      </div>
    )
  


}

export default NumberOfEvents;