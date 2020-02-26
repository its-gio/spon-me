import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'

export default function UserMap() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    width: '100vw',
    height: '100vh',
    zoom: 17
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>  {
        const {latitude, longitude} = position.coords;
        setViewport({...viewport, latitude, longitude})
      })
    } else {
      console.error('Geolocation is not supported!')
    }
  }, [])

  return (
    <div>
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
    </div>
  )
}