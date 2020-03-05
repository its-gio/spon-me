import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSession } from '../../redux/reducers/userReducer';
import { getEvents } from '../../redux/reducers/eventReducer';

import Navbar from './Navbar'
import UserEditModal from '../Modal/UserEditModal';
import EventDetailsModal from '../Modal/EventDetailsModal';
import Btns from './Btns'
import Map from './Map';

function UserMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: '100%',
    height: '100%',
    zoom: 17
  })

  const [navActive, setNavActive] = useState({ active: false });
  const [userEdit, setUserEdit] = useState({ active: false });
  const [eventDetails, setEventDetails] = useState({ active: false });
  const [createBeacon, setCreateBeacon] = useState({ active: false });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>  {
        const {latitude, longitude} = position.coords;
        setViewport({...viewport, latitude, longitude})
      })
    } else {
      alert('Geolocation is not supported!')
    }

    props.getSession();
    props.getEvents();
  }, [])

  return (
    <div className="map">
      { props.user.user_id === null  ? <Redirect to="/" /> : null }
      {
        props.events ?
        <Map viewport={viewport} setViewport={setViewport} events={props.events} /> :
        null
      }

      <Navbar active={navActive.active} setNavActive={setNavActive} setUserEdit={setUserEdit} />
      <Btns createBeacon={createBeacon} setCreateBeacon={setCreateBeacon} setEventDetails={setEventDetails} setNavActive={setNavActive} />
      { userEdit.active ? <UserEditModal setUserEdit={setUserEdit} /> : "" }
      { eventDetails.active ? <EventDetailsModal lati={viewport.latitude} long={viewport.longitude}  setEventDetails={setEventDetails} /> : "" }
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user, events: reduxState.events.events });

export default connect(mapStateToProps, { getSession, getEvents })(UserMap)