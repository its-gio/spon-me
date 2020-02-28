import React from 'react';
import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { logout } from '../../redux/reducers/userReducer'

const Navbar = (props) => {
  return (
    <div className={ props.active ? "map--navbar active" : "map--navbar" }>
      <div onClick={() => props.setNavActive({ active: false })} className="map--navbar__x">
        <FaTimes />
      </div>

      <ul className="map--navbar__list">
        <li>Friends List</li>
        <li>Edit Account</li>
        <li onClick={props.logout}>Logout</li>
      </ul>
    </div>
  )
}

export default connect(null, { logout })(Navbar);