import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
          <div className="login">
            <h1>Spontaneous Me</h1>
            <form>
              <input type="text" placeholder="Email"/>
              <input type="text" type="password" placeholder="Password" />
              <button>Log In</button>
            </form>
          </div>
        </header>
      </div>
    )
  }
}