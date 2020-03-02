import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  state = {

  }

  el = document.createElement('div');

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render () {
    return ReactDOM.createPortal(
      <form className="form">
        <input required onChange={this.handleChange} className="form__name" value={this.state.first_name} name="first_name" placeholder="First Name" type="text"/>
        <input required onChange={this.handleChange} className="form__name" value={this.state.last_name} name="last_name" placeholder="Last Name" type="text"/>
        <input required onChange={this.handleChange} className="form__email" value={this.state.email} name="email" placeholder="Email" type="email"/>
        <input required onChange={this.handleChange} className="form__password" value={this.state.password} name="password" placeholder="Password" type="password"/>
        <button>Cancel</button>
        <button>Confirm</button>
      </form>,
      this.el
    )
  }
}



export default connect(null ,{})(Modal);