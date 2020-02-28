import React from 'react'
import { FaTimes } from 'react-icons/fa'

export const Navbar = (props) => {
  return (
    <div className={ props.active ? "map--navbar active" : "map--navbar" }>
      <div onClick={() => props.setNavActive({ active: false })} className="map--navbar__x">
        <FaTimes />
      </div>

      <ul className="map--navbar__list">
        <li>Friends List</li>
        <li>Edit Account</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}
