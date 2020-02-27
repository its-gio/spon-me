import React, { Component } from 'react';
import { FaMapMarker, FaStar , FaUserPlus } from 'react-icons/fa';
import Login from './Login'
import { Features } from './Features';

export default class Home extends Component {
  render() {
    const textArray = ["Drop a beacon and meet your neighbours", "Make personal connections", "Be spontaneous!"]
    const iconArray = [<FaMapMarker />, <FaUserPlus />, <FaStar />]
    const featuresMap = textArray.map((text, i) => <Features key={i} text={text}>{iconArray[i]}</Features>)
    return (
      <section className="home">
        <header>
          <div className="login">
            <h1>Spontaneous Me</h1>
            <Login />
          </div>

          <div id="tagline">
            <h5>Connect with people for no reason at all!</h5>
          </div>
        </header>

        <div className="register">
          <h2>Register Meow!</h2>
          <div className="register-content">
            <div className="register-content--features">
              { featuresMap }
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