import React from 'react'

export const Features = (props) => {
  return (
    <div className="register-content--features__item">
      <div className="icon" >
        {props.children}
      </div>
      <h6>{props.text}</h6>
    </div>
  )
}
