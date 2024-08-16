import React from 'react'
import './Footer.css';

import { suzerainlogo, facebooklogo, xlogo, linkedinlogo } from '../../constants/images';

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <div className="app__footer-text">
        <h1>CONTACT</h1>
        <h1>ME?</h1>
      </div>
      <div className="app__footer-links">
        <div className="app__footer-links_email">
          <img src={ suzerainlogo } alt="emaillogo"/>
          <p>victor.bulintao.ii@gmail.com</p>
        </div>
        <div className="app__footer-links_icons">
          <img src={ facebooklogo } alt='Facebook' />
          <img src={ xlogo } alt='X' />
          <img src={ linkedinlogo } alt='Linkedin' />
        </div>
      </div>
    </div>
  )
}

export default Footer
