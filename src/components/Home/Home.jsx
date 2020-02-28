import React, { Component } from 'react';
import { FaMapMarker, FaStar , FaUserPlus } from 'react-icons/fa';
import Login from './Login'
import { Features } from './Features';
import Register from './Register';

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

            <Register/>
          </div>
        </div>
      </section>
    )
  }
}