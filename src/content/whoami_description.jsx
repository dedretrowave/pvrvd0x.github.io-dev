import React from 'react';
import ReactWoW from 'react-wow';

import { countAge } from '../helpers';
import myAvatarPath from '../assets/img/me.png';

let age = countAge();

const WhoamiDesc = ({classes}) => (
  <p className={classes}>
    <ReactWoW animation='fadeInUp' delay='400ms'>
      <img src={myAvatarPath} className={`${classes}__img`} alt=""/>
    </ReactWoW>
    <ReactWoW animation='fadeInUp' delay='600ms'>
      <span>
        My name is Dmitry.
        <br/><br/> I am from Belarus currently located in Gomel but always searching for opportunities to travel.
        <br/><br/> Currently I am {age} but I consider my age as just a number nothing more nothing less.
        <br/><br/>I am full of enthusiasm about my current spectre of work.
        <br/><br/>I started to obtain my skill at <a className={`${classes}__link`} href="itstep.by">ITStep Academy</a> and studied by myself.
        <br/>Later I had won a grant from Belarusian IT company called <a className={`${classes}__link`} href="syberry.by">Syberry CIS</a>.
        <br/>They paid my whole my course in Academy in advance with the condition that I will work there as a Front-End developer 
        after my graduation from the academy.
        <br/><br/>I finished my courses with the highest grade and started working in Syberry. 
        Before that I was working as a Freelancer in CIS Freelance market and got some experience there. While working at Syberry 
        I had got a lot of new skills and real project experience in those technologies that I like. But later we had some 
        misunderstanding with the heads of the company and we decided to break the contract. Now I want to fully dive into 
        freelancing world to get some fresh air and get new experience of working for myself
        <br/><br/><br/>
        Currently I am working at FinTech startup and offer my service online in order to make some money for investment
      </span>
    </ReactWoW>
  </p>
);

export default WhoamiDesc;