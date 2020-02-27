import React, { Component } from 'react';
import { FaMapMarker, FaStar , FaUserPlus } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
      <section className="home">
        <header>
          <div className="login">
            <h1>Spontaneous Me</h1>
            <form>
              <input type="text" placeholder="Email"/>
              <input type="text" type="password" placeholder="Password" />
              <button>Log In</button>
            </form>
          </div>

          <div id="tagline">
            <h5>Connect with people for no reason at all!</h5>
          </div>
        </header>

        <div className="register">
          <h2>Register Meow!</h2>
          <div className="register-content">
            <div className="register-content--features">
              <div className="register-content--features__item">
                <div className="icon" >
                  <FaMapMarker />
                </div>
                <h6>Drop a beacon and meet your neighbours</h6>
              </div>

              <div className="register-content--features__item">
                <div className="icon" >
                  <FaUserPlus />
                </div>
                <h6>Make personal connections</h6>
              </div>

              <div className="register-content--features__item">
                <div className="icon" >
                  <FaStar />
                </div>
                <h6>Be spontaneous!</h6>
              </div>
            </div>

            <div className="register-content--form">
              <input className="register-content--form__name" name="" placeholder="First Name" type="text"/>
              <input className="register-content--form__name" name="" placeholder="Last Name" type="text"/>
              <input className="register-content--form__email" name="" placeholder="Email" type="email"/>
              <input className="register-content--form__password" name="" placeholder="Password" type="password"/>
              <input className="register-content--form__DOB" name="" placeholder="MM" type="text"/>
              <input className="register-content--form__DOB" name="" placeholder="DD" type="text"/>
              <input className="register-content--form__DOB" name="" placeholder="YYYY" type="text"/>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}