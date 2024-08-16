import React from 'react'

import './Skill.css';

const Skill = ({ imgUrl, title, details }) => {
  return (
    <div className="app__skills-container_skills">
        <div className="app__skills-container_skills-image">
            <img src={imgUrl} url="skills"/>
        </div>
        <div className="app__skills-container_skills-content">
            <div>
                <h3>{title}</h3>
                <p>{details}</p>
            </div>
        </div>
        <div className="app__skills-container_skills-bar">
          <p> </p>
        </div>
    </div>
  )
}

export default Skill
