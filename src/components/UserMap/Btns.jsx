import React from 'react'
import { FaBars, FaPlus, FaCheck, FaTimes, FaMapMarkerAlt } from "react-icons/fa";

export default function Btns(props) {
  const locationAgreed = () => {
    let results = window.confirm("Are you sure this location?")

    if (results) {
      props.setCreateBeacon({ active: false })
      props.setEventDetails({ active: true })
    }
  }

  return (
    <>
      {
        props.createBeacon.active
        ?
        <>
          <FaMapMarkerAlt className="map--marker" />
          <div onClick={() => props.setCreateBeacon({ active: false })} className="map--addEvent x">
            <FaTimes />
          </div>
          <div onClick={locationAgreed} className="map--addEvent check">
            <FaCheck />
          </div>
        </>
        :
        <>
          <div onClick={() => props.setNavActive({ active: true })} className="map--navbtn">
            <FaBars />
          </div>

          <div onClick={() => props.setCreateBeacon({ active: true })} className="map--addEvent">
            <FaPlus />
          </div>
        </>
      }
    </>
  )
}
