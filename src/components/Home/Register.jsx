import React from 'react'

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

    console.log(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="register-content--form">
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

export default Register
