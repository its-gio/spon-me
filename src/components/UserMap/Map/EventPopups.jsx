import React from 'react';
import { Popup } from 'react-map-gl';
import AttendeesList from './AttendeesList';
import RSVPBtns from './RSVPBtns';


function EventPopups(props) {
  const checkTime = () => {
    const today = new Date();
    const clockTime = `${today.getHours()}${today.getMinutes()}`;
    const timeSplit = props.selectedEvent.start_time.split(" ");
    const startTime = timeSplit[1] === 'am' ? timeSplit[0].split(":").join('') : +timeSplit[0].split(':').join('') + 1200;
    return clockTime >= startTime;
  }

  return (
    <>
      { props.selectedEvent ? (
        <Popup offsetTop={-25} offsetLeft={25} latitude={props.selectedEvent.lati} longitude={props.selectedEvent.long} closeOnClick={false} onClose={() => props.setSelectedEvent(null)}>
          <h5>Category: {props.selectedEvent.category}</h5>
          {props.selectedEvent.description ? <p>{props.selectedEvent.description}</p> : ""}
          <p>Start: {props.selectedEvent.start_time}</p>
          <p>End: {props.selectedEvent.end_time}</p>

          {
            checkTime() ?
            <AttendeesList attendees={props.selectedEvent.attendees} /> :
            null
          }

          <RSVPBtns setSelectedEvent={props.setSelectedEvent} attendees={props.selectedEvent.attendees} event_id={props.selectedEvent.event_id} checkTime={checkTime} />
        </Popup>
      ) : null } 
    </>
  )
}

export default EventPopups;