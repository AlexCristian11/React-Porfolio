import React from 'react'
import styled from 'styled-components';
import Project from './Project';
import data from '../data';

function Projects() {

    const projectElements = data.map(value => {
        return <Project 
          key={value.id}
          {...value}
      /> }
    )

  return (
    <div>
        <div className="headline">
            <h2>Projects</h2>
            <p>Here you can see some of the projects that I made!</p>
        </div>
        <ProjectsStyle>
            {projectElements}
        </ProjectsStyle>
    </div>
  )
}

const ProjectsStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-around;

`

export default Projects