import React from 'react'

function AttendeesList(props) {
  const getGroups = (Bool) => props.attendees.map((attendee, i) => attendee.has_arrived === Bool ? <li key={i}>{attendee.first_name} {attendee.last_name}</li> : null);

  return (
    <>
      {
        getGroups(true) ?
        <><p>Current Group:</p><ul>{ getGroups(true) }</ul></> :
        null
      }

      {
        getGroups(false) ?
        <><p>On Their Way:</p><ul>{ getGroups(false) }</ul></> :
        null
      }
    </>
  )
}

export default AttendeesList
