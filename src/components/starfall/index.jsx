import React from 'react';

import './starfall.scss';
import rectanglePath from '../../assets/img/Rectangle.svg';


const Starfall = () => {
  return (
    <div className="starfall">
      <img src={rectanglePath} className="starfall__rect starfall__rect-1" alt="Error"/>
      <img src={rectanglePath} className="starfall__rect starfall__rect-2" alt="Error"/>
      <img src={rectanglePath} className="starfall__rect starfall__rect-3" alt="Error"/>
      <img src={rectanglePath} className="starfall__rect starfall__rect-4" alt="Error"/>
      <img src={rectanglePath} className="starfall__rect starfall__rect-5" alt="Error"/>
      <img src={rectanglePath} className="starfall__rect starfall__rect-6" alt="Error"/>
    </div>
  )
};


export default Starfall;