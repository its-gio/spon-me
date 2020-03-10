import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { joinEvent, getEvents } from '../../../redux/reducers/eventReducer'

function RSVPBtns(props) {
  const [RSVP, setRSVP] = useState(false);

  useEffect(() => {
    let RSVPTest = props.attendees.findIndex(attendee => attendee.user_id === props.user_id);
    RSVPTest !== -1 ? setRSVP(true) : setRSVP(false);
  }, [props.event_id])

  const joinEvent = async () => {
    await props.joinEvent(props.event_id);
    await props.getEvents();
    props.setSelectedEvent(null);
  }

  return (
    <div>
      {
        RSVP ?
        null :
        <button onClick={joinEvent}>Join</button>
      }
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ user_id: reduxState.user.user_id })

export default connect(mapStateToProps, { joinEvent, getEvents })(RSVPBtns);