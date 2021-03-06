import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import EventPopups from './Map/EventPopups';


function Map(props) {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
          <Marker offsetLeft={-25} offsetTop={-25} key={event.event_id} latitude={event.lati} longitude={event.long}>
            <div onClick={() => setSelectedEvent(event)} className="event-area"></div>
          </Marker>
        ))
      }

      <EventPopups selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} />
    </ReactMapGL>
  )
}

export default Map