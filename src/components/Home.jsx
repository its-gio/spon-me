import React, { Component } from 'react'

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
      </section>
    )
  }
}