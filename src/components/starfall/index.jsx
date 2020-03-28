import React from 'react';
import ReactWoW from 'react-wow';

import './starfall.scss';
import rectanglePath from '../../assets/img/Rectangle.svg';


const Starfall = () => {
  return (
    <div className="starfall">
      <ReactWoW animation='display'>
        <img src={rectanglePath} className="starfall__rect starfall__rect-1" alt="Error"/>
      </ReactWoW>
      <ReactWoW animation='display'>
        <img src={rectanglePath} className="starfall__rect starfall__rect-2" alt="Error"/>
      </ReactWoW>
      <ReactWoW animation='display'>
        <img src={rectanglePath} className="starfall__rect starfall__rect-3" alt="Error"/>
      </ReactWoW>       
      <ReactWoW animation='display'>  
        <img src={rectanglePath} className="starfall__rect starfall__rect-4" alt="Error"/>
      </ReactWoW>
      <ReactWoW animation='display'>      
        <img src={rectanglePath} className="starfall__rect starfall__rect-5" alt="Error"/>
      </ReactWoW>  
      <ReactWoW animation='display'>
        <img src={rectanglePath} className="starfall__rect starfall__rect-6" alt="Error"/>
      </ReactWoW>
    </div>
  )
};


export default Starfall;