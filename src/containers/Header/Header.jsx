import React from 'react'
import { rectangleorange } from '../../constants/images';

import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__bg app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <img src={rectangleorange} alt="header bar img"/>
        <h1 className="app__header-h1">HELLO!</h1>
        <p className="p__comfortaa" style={{color:'#ffff', display:'flex', justifyContent:'center'}}>I AM</p>
        <h2 className="app__header-h2">VICTOR BRANDON</h2>
        <div className="app__header-position">
          <h2 className="p__saira">FRONT-END DEVELOPER</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
