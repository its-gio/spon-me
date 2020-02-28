import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Navbar = (props) => {
  return (
    <div className={ props.active ? "map--navbar active" : "map--navbar" }>
      <div onClick={() => props.setNavActive({ active: false })} className="map--navbar__x">
        <FaTimes />
      </div>
      <ul>
        <li>This is a test!</li>
      </ul>
    </div>
  )
}
