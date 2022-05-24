import React from 'react'
import styled from 'styled-components';
import Project from './Project';
import data from '../data';

function Projects(props) {

    const projectElements = data.map(value => {
        return <Project 
          key={value.id}
          {...value}
      /> }
    )

  return (
    <SectionStyle>
      <div id="projects" className={props.darkMode ? "dark" : ""} >
          <div className="headline">
              <h2>Projects</h2>
              <p>Here you can see some of the projects that I made!</p>
          </div>
          <ProjectsStyle>
              {projectElements}
          </ProjectsStyle>
      </div>
    </SectionStyle>
  )
}

const SectionStyle = styled.div`

    height: 100%;

    .dark {
      background-color: #000;
      color: #fff;
    }

    .headline {
      text-align: center;
    }

    .headline h2 {
      font-size: 1.75rem;
      padding-top: 160px;
      margin-bottom: 20px;
    }
    .headline p {
      font-size: 1.4rem;
      margin-bottom: 50px;
    }
`

const ProjectsStyle = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-around;

`

export default Projects