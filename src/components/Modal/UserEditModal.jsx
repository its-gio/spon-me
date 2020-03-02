import React from 'react';
import { connect } from 'react-redux';

import { editUser } from '../../redux/reducers/userReducer'

class UserEditModal extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: ''
  }

  componentDidMount() {
    const { first_name, last_name, email } = this.props.user
    this.setState({ first_name, last_name, email })
  }
  
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  cancelEdit = () => this.props.setUserEdit({ active: false });

  handleSubmit = e => {
    e.preventDefault();

    const { user_id } = this.props.user;
    this.props.editUser({...this.state, user_id});

    this.cancelEdit()
  }

  render () {
    return (
      <div className="modal-container">
        <form onSubmit={this.handleSubmit} className="form">
          <input required onChange={this.handleChange} className="form__name" value={this.state.first_name} name="first_name" placeholder="First Name" type="text"/>
          <input required onChange={this.handleChange} className="form__name" value={this.state.last_name} name="last_name" placeholder="Last Name" type="text"/>
          <input required onChange={this.handleChange} className="form__email" value={this.state.email} name="email" placeholder="Email" type="email"/>
          {/* <input onChange={this.handleChange} className="form__password" value={this.state.password} name="password" placeholder="Password" type="password"/> */}
          <div>
            <button>Confirm</button>
            <button className="cancelBtn" onClick={this.cancelEdit}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => ({ user: reduxState.user })

export default connect(mapStateToProps, { editUser })(UserEditModal);