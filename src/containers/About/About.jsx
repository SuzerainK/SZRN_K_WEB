import React from 'react'
import './About.css'

import { profilephoto } from '../../constants/images';

const About = () => {
  return (
    <div className="app__about app__bg_3 section__padding flex__center" id='About'>
      <div className="app__about-card">
        <div className="app__about-profile">
          <img src={ profilephoto } alt="profile"/>
        </div>
        <div className="app__about-contents">
          <h1>MORE</h1>
          <h2>ABOUT ME</h2>
          <p>Heyo, my name is Victor Brandon! I graduated last year with Computer Science degree in Cavite. During my years in school, I did not participate much in extracurricular activities, but rather with things that interest me back in the day, such as meddling with computer settings and trying to use tools to cheat on online games through hash codes. Which possibly made the decision for me to pursue a career in computer science. </p>
          <p>In college, I usually take the lead direction when it comes to group activities if no one else wants to. I make sure that things go through my plans as I delegate tasks to my members. But whenever there is someone more capable than me, I let them take the reins and support the team as much as I can. And so, me and the group I led managed to program full-blown projects such as a Visual Novel portable on PC and Android device, and an RPG on PC. </p>
          <p>While my peers think I am that capable, I was actually less smart than they gave credit me for, as I just go through things by sheer false confidence and passion when looking up for solutions online because I forgot what I learned in the past. Because things need to get rolling or else nothing will be done.</p>
        </div>
      </div>
    </div>
  )
}

export default About
