import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

function EventBtns(props) {
  const [RSVP, setRSVP] = useState(false)
  useEffect(() => {
    let RSVPTest = props.attendees.findIndex(attendee => attendee.user_id === props.user_id);
    RSVPTest !== -1 ? setRSVP(true) : setRSVP(false);
  }, [])

  return (
    <div>
      {
        RSVP ?
        null :
        <button>Join</button>
      }
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ user_id: reduxState.user.user_id })

export default connect(mapStateToProps, {})(EventBtns)
