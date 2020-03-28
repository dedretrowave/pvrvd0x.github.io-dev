import React from 'react';
import ReactWoW from 'react-wow';

import './index.scss';


const Navbar = () => (
  <ReactWoW animation='slideInDown' delay='500ms'>
    <nav className="navbar">
      <a href="/" className="navbar__item">
          Who am I?
          <span className="navbar__item-underline"></span>
      </a>
      <a href="/" className="navbar__item">
          Specialization
          <span className="navbar__item-underline"></span>
      </a>
      <a href="/" className="navbar__item">
          Experience
          <span className="navbar__item-underline"></span>
      </a>
      <a href="/" className="navbar__item">
          Works
          <span className="navbar__item-underline"></span>
      </a>
    </nav>
  </ReactWoW>
);

export default Navbar;