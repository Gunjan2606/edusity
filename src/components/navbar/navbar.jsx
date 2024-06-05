import React from 'react'
import './navbar.css/'
import logo  from '../../assets/logo.png'

const navbar = () => {
  return (
    <nav>
      <img src={logo} alt=""></img>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>Contact us</li>
      </ul>
    </nav>
  )
}

export default navbar
