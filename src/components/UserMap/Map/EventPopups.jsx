import React from 'react';
import { Popup } from 'react-map-gl';

function EventPopups(props) {
  return (
    <>
      { props.selectedEvent ? (
        <Popup offsetTop={-55} latitude={props.selectedEvent.lati} longitude={props.selectedEvent.long} onClose={() => props.setSelectedEvent(null)}>
          <h6>Category: {props.selectedEvent.category}</h6>
          {props.selectedEvent.description ? <p>{props.selectedEvent.description}</p> : ""}
          <p>Start:{props.selectedEvent.start_time}</p>
          <p>End:{props.selectedEvent.end_time}</p>
          <p>Current Group:</p>
          {/* <ul>
            <li></li>
          </ul> */}
        </Popup>
      ) : null } 
    </>
  )
}

export default EventPopups;