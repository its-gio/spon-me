import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'

export default function UserMap() {
  const [viewport, setViewport] = useState({
    latitude: 32.7759944,
    longitude: -96.7962258,
    width: '100vw',
    height: '100vh',
    zoom: 17
  })

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        mapStyle='mapbox://styles/its-gio/ck73qpski1ssc1io7mtpotq0i'
        onViewportChange={viewport => setViewport(viewport)}
      >
        Markers!
      </ReactMapGL>
    </div>
  )
}