import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';

import { navlogo } from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={navlogo} alt="app_logo"/>
      </div>
      <ul className="app__navbar-links">
        <li className="p__comfortaa"><a href="#works">Sample Works</a></li>
        <li className="p__comfortaa"><a href="#skills">Skills</a></li>
        <li className="p__comfortaa"><a href="#about">About</a></li>
        <li className="p__comfortaa"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#2D2D2D" fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__comfortaa" onClick={() => setToggleMenu(false)}><a href="#works">Sample Works</a></li>
              <li className="p__comfortaa" onClick={() => setToggleMenu(false)}><a href="#skills">Skills</a></li>
              <li className="p__comfortaa" onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
              <li className="p__comfortaa" onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
