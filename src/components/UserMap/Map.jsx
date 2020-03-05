import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';


function Map(props) {
  return (
    <ReactMapGL
      {...props.viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
      mapStyle='mapbox://styles/its-gio/ck73qpski1ssc1io7mtpotq0i'
      onViewportChange={viewport => {
          props.setViewport(viewport)
        }
      }
    >
      {
        props.events.map(event => (
          <Marker key={event.event_id} latitude={event.lati} longitude={event.long}></Marker>
        ))
      }
  </ReactMapGL>
  )
}

export default Map
