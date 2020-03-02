import React from 'react';
import { connect } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import { logout, deleteUser } from '../../redux/reducers/userReducer'

const Navbar = (props) => {
  const activateEdit = () => {
    props.setNavActive({ active: false });
    props.setUserEdit({ active: true });
  }

  const handleDeleteUser = () => {
    const result = window.confirm("Are you sure you want to delete your account?");

    if (result) {
      let result2 = window.confirm(`If you do we know where you live, ${props.userName}!`);

      if (result2) {
        props.deleteUser(props.id);
      }
    }
  }

  return (
    <div className={ props.active ? "map--navbar active" : "map--navbar" }>
      <div onClick={() => props.setNavActive({ active: false })} className="map--navbar__x">
        <FaTimes />
      </div>

      <ul className="map--navbar__list">
        <li>Friends List</li>
        <li onClick={activateEdit}>Edit Account</li>
        <li onClick={props.logout}>Logout</li>
        <li onClick={handleDeleteUser} className="deleteBtn">Delete Account</li>
      </ul>
    </div>
  )
}

const mapStateToProps = (reduxState) => ({ userName: reduxState.user.first_name, id: reduxState.user.user_id })

export default connect(mapStateToProps, { logout, deleteUser })(Navbar);