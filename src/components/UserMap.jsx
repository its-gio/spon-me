import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { Marker } from 'react-map-gl';
import { getSession } from '../redux/reducers/userReducer';
import { FaBars } from "react-icons/fa";

import{ Navbar } from './UserMap/Navbar'

function UserMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: '100%',
    height: '100%',
    zoom: 17
  })

  const [user, setUser] = useState({})

  const [navActive, setNavActive] = useState({ active: false })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>  {
        const {latitude, longitude} = position.coords;
        setViewport({...viewport, latitude, longitude})
      })
    } else {
      console.error('Geolocation is not supported!')
    }

    props.getSession()
      .then(res => setUser({...res.value.data}))
      .catch(err => console.error(err));

  }, [])

  return (
    <div className="map">
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

      <Navbar active={navActive.active} setNavActive={setNavActive} />
    </div>
  )
}

export default connect(null, { getSession })(UserMap)