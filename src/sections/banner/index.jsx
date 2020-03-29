import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactWoW from 'react-wow';

import { Navbar, Starfall } from '../../components';

import './banner.scss';


const Banner = () => {
  const eraseDelay = 1000;
  const typingDelay = 2000;
  const typingSpeed = 100;

  const adjectives = [
    'HONEST',
    'EFFECTIVE',
    'FRIENDLY',
    'CREATIVE',
    'UNIQUE'
  ];

  // const specs = [
  //   'DEVELOPING',
  //   'DESIGNING',
  //   'COPYWRITING',
  //   'OPTIMIZING',
  //   'CREATE',
  // ];

  return (
    <div className="banner container">
      <Navbar/>
      <Starfall/>
      <div className="banner__title">
        <ReactWoW animation='fadeInLeft'>
          <h1 className="banner__career">
            {/* <ReactTypingEffect
              text={specs}
              eraseDelay={eraseDelay}
              typingDelay={typingDelay}
              typingSpeed={typingSpeed}
            /> */}
            FREELANCING
          </h1>
        </ReactWoW>
        <ReactWoW animation='fadeInLeft' delay='200ms'>
          <h1 className="banner__article">
            IN THE
          </h1>
        </ReactWoW>
        <h1 className="banner__description">
          <ReactWoW animation='fadeInLeft' delay='400ms'>
            <span className="banner__typing">
              <ReactTypingEffect
                text={adjectives}
                eraseDelay={eraseDelay}
              typingDelay={typingDelay}
              typingSpeed={typingSpeed}
              />
            </span>
          </ReactWoW>
          <ReactWoW animation='fadeInLeft' delay='600ms'>
            <span className="banner__way">
              WAY
            </span>
          </ReactWoW> 
        </h1>
      </div>
      <ReactWoW animation='fadeIn'>
        <button className="banner__contact">
          Contact Me
        </button>
      </ReactWoW>
    </div>
  );
}

export default Banner;