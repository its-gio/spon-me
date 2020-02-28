import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestRegister } from '../../redux/reducers/userReducer';

class Register extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { first_name, last_name, email, password } = this.state;
    this.props.requestRegister(first_name, last_name, email, password);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="register-content--form">
        { this.props.user.user_id ? <Redirect to="/account" /> : null }
        <input required onChange={this.handleChange} className="register-content--form__name" value={this.state.first_name} name="first_name" placeholder="First Name" type="text"/>
        <input required onChange={this.handleChange} className="register-content--form__name" value={this.state.last_name} name="last_name" placeholder="Last Name" type="text"/>
        <input required onChange={this.handleChange} className="register-content--form__email" value={this.state.email} name="email" placeholder="Email" type="email"/>
        <input required onChange={this.handleChange} className="register-content--form__password" value={this.state.password} name="password" placeholder="Password" type="password"/>
        {/* <input className="register-content--form__DOB" name="" placeholder="MM" max="12" min="01" type="number"/>
        <input className="register-content--form__DOB" name="" placeholder="DD" max="12" min="01" type="number"/>
        <input className="register-content--form__DOB" name="" placeholder="YYYY" type="number"/> */}
        <button>Sign Up</button>
      </form>
    )
  }
}

export default connect((reduxState) => ({ user: reduxState.user }),{ requestRegister })(Register)
