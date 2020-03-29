import React from 'react';
import { Parallax } from 'react-parallax';
import ReactWoW from 'react-wow';

import { WhoamiDesc } from '../../content';

import backgroundPath from '../../assets/img/who_am_i_bg.svg';
import './whoami.scss';


const Whoami = () => {
  return (
    <section className="whoami">
      <ReactWoW animation='slideOutRight'>
        <div className="whoami__curtain"></div>
      </ReactWoW>
      <Parallax
        className="whoami__bg"
        strength={-150}
        style={{overflow: 'visible'}}
        bgImage={backgroundPath}>
          <div className="whoami__content container">
            <ReactWoW animation='fadeInUp' delay='400ms'>
              <h1 className="whoami__heading">
                WHO AM I?
              </h1>
            </ReactWoW>
            <WhoamiDesc classes="whoami__description"/>
          </div>
      </Parallax>
    </section>
)};

export default Whoami;