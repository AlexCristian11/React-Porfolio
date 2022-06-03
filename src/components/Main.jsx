import React from 'react'
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

function Main(props) {
  return (
    <div>
        <About darkMode={props.darkMode}/>
        <Projects darkMode={props.darkMode}/>
        <Skills darkMode={props.darkMode}/>
    </div>
  )
}

export default Main