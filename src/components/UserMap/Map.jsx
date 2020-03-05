import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';


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
          <Marker offsetLeft={-50} offsetTop={-50} key={event.event_id} latitude={event.lati} longitude={event.long}>
            <div onClick={() => setSelectedEvent(event)} className="event-area"></div>
          </Marker>
        ))
      }

      { selectedEvent ? (
        <Popup offsetTop={-55} latitude={selectedEvent.lati} longitude={selectedEvent.long} onClose={() => setSelectedEvent(null)}>
          <h6>Category: {selectedEvent.category}</h6>
          {selectedEvent.description ? <p>{selectedEvent.description}</p> : ""}
          <p>Start:{selectedEvent.start_time}</p>
          <p>End:{selectedEvent.end_time}</p>
          <p>Current Group:</p>
          {/* <ul>
            <li></li>
          </ul> */}


        </Popup>
      ) : null }
  </ReactMapGL>
  )
}

export default Map
