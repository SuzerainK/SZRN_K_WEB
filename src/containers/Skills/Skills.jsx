import React from 'react'
import './Skills.css';

import { csharplogo, mysqllogo, pythonlogo, reactlogo, figmalogo, mvstudiologo, vscodelogo, cspaintlogo } from '../../constants/images';
import { Skill } from '../../components';

const Skills = () => {
  return (
    <div className="app__skills app__bg section__padding" id="skills">
      <div className="app__skills-title">
        <h2> SKILLS </h2>
      </div>
      <div className="app__skills-container">
        <div className="app__skills-container_column">
          <Skill imgUrl={reactlogo} title="ReactJS" details="Has experience in developing websites using ReactJS and React Native."/>
          <Skill imgUrl={pythonlogo} title="Python" details="Trained in Python in University classes. Mainly used in statistics and machine learning."/>
          <Skill imgUrl={mysqllogo} title="MySQL" details="Knows basic functions of MySQL DBMS."/>
          <Skill imgUrl={csharplogo} title="C#" details="Developed a running program using C# language. Mainly used on developing games."/>
          <Skill imgUrl={figmalogo} title="Figma" details="A required skill when trying to design and develop websites."/>
          <Skill imgUrl={cspaintlogo} title="Clip Studio" details="Similar to Adobe Photoshop but with more focus on illustrations."/>
          <Skill imgUrl={vscodelogo} title="VS Code" details="Capable of writing code, loading extensions, package manager commands in this program."/>
          <Skill imgUrl={mvstudiologo} title="MV Studio" details="Was mainly used while developing in C# language."/>
        </div>

      </div>
      
    </div>
  )
}

export default Skills
 