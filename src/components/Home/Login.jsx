import React, { useState } from 'react'
import { connect } from 'react-redux';
import { requestLogin } from '../../redux/reducers/userReducer'

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    setLogin({ email: '', password: '' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={login.email} name="email" type="text" placeholder="Email"/>
      <input onChange={handleChange} value={login.password} name="password" type="text" type="password" placeholder="Password" />
      <button>Log In</button>
    </form>
  )
}

export default connect(null, { requestLogin })(Login);
