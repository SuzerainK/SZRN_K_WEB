import React from 'react'
import './Skills.css';

import { csharplogo, mysqllogo, pythonlogo, reactlogo, figmalogo } from '../../constants/images';
import { Skill } from '../../components';

const Skills = () => {
  return (
    <div className="app__skills app__bg section__padding" id="skills">
      <div className="app__skills-title">
        <h2> SKILLS </h2>
      </div>
      <div className="app__skills-container">
        <div className="app__skills-container_column">
          <Skill imgUrl={reactlogo} title="ReactJS" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={pythonlogo} title="Python" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={mysqllogo} title="MySQL" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={csharplogo} title="C#" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={figmalogo} title="Figma" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={figmalogo} title="Figma" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={figmalogo} title="Figma" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={figmalogo} title="Figma" details="Capable of writing code, loading extensions, package manager commands in this program."/>
        </div>

      </div>
      
    </div>
  )
}

export default Skills
 