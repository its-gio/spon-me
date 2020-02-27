import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { requestLogin } from '../../redux/reducers/userReducer'

function Login(props) {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = login;
    setLogin({ email: '', password: '' });
    props.requestLogin(email, password).catch(err => alert(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      { props.user.user_id ? <Redirect to="/account" /> : null }
      <input onChange={handleChange} value={login.email} name="email" type="text" placeholder="Email"/>
      <input onChange={handleChange} value={login.password} name="password" type="text" type="password" placeholder="Password" />
      <button>Log In</button>
    </form>
  )
}

export default connect((reduxState) => ({ user: reduxState.user }), { requestLogin })(Login);