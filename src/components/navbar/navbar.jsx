import React from 'react';
import './navbar.css';
import logo from './../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="Unavailable" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/program">Program</a></li>
          <li><a href="/about">About us</a></li>
          <li><a href="/campus">Campus</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;