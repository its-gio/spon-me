import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactMapGL from 'react-map-gl';
import { getSession } from '../../redux/reducers/userReducer';
import { FaBars } from "react-icons/fa";

import Navbar from './Navbar'
import UserEditModal from '../Modal/UserEditModal';

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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>  {
        const {latitude, longitude} = position.coords;
        setViewport({...viewport, latitude, longitude})
      })
    } else {
      alert('Geolocation is not supported!')
    }

    props.getSession()
  }, [])

  return (
    <div className="map">
      { props.user.user_id === null  ? <Redirect to="/" /> : null }
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle='mapbox://styles/its-gio/ck73qpski1ssc1io7mtpotq0i'
        onViewportChange={viewport => {
            setViewport(viewport)
          }
        }
      >
      </ReactMapGL>

      <div onClick={() => setNavActive({ active: true })} className="map--navbtn">
        <FaBars />
      </div>

      <Navbar active={navActive.active} setNavActive={setNavActive} setUserEdit={setUserEdit} />
      { userEdit.active ? <UserEditModal setUserEdit={setUserEdit} /> : "" }
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { getSession })(UserMap)