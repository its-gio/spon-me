import React from 'react'
import { FaBars, FaPlus, FaTimes } from "react-icons/fa";


export default function Btns(props) {
  return (
    <>
      {
        props.createBeacon.active
        ?
        <div onClick={() => props.setCreateBeacon({ active: false })} className="map--addEvent x">
          <FaTimes />
        </div>
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
