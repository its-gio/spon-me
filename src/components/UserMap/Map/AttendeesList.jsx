import React, {useState, useEffect} from 'react'

function AttendeesList(props) {
  const [groups, setGroups] = useState(null);

  useEffect(() => {
    groupAttendees();
  }, [])

  const groupAttendees = () => {
    const cgCheck = props.attendees.filter(attendee => attendee.has_arrived === true);
    const otwCheck = props.attendees.filter(attendee => attendee.has_arrived === false);
    const CG = cgCheck.map((attendee, i) => <li key={i}>{attendee.first_name} {attendee.last_name}</li>)
    const OTW = otwCheck.map((attendee, i) => <li key={i}>{attendee.first_name} {attendee.last_name}</li>)

    setGroups({CG, OTW});
  }

  // attendee.has_arrived === Bool ? <li key={i}>{attendee.first_name} {attendee.last_name}</li> : null

  return (
    <>
      {
        groups !== null && groups.CG.length !== 0 ?
        <><p>Current Group:</p><ul>{ groups.CG }</ul></> :
        null
      }

      {
        groups !== null && groups.OTW.length !== 0 ?
        <><p>On Their Way:</p><ul>{ groups.OTW }</ul></> :
        null
      }
    </>
  )
}

export default AttendeesList
