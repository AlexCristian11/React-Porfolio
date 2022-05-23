import React from 'react'
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

function Project(props) {
  return (
    <ProjectStyle>
        <img src="" alt="" />
        <div className="project-description">
            <h3>Project #{props.id}</h3>
            <p>{props.description}</p>
            <a href={props.link} alt="github link" target="_blank" rel="noopener noreferrer"><FaGithub size="50px" className="icon"/></a>
        </div>
    </ProjectStyle>
  )
}

const ProjectStyle = styled.div`
    width: 350px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 0 48px 48px 0;
    background-color: #683fe2;
    color: white;
    border-radius: 12px;

    .project-description {
        display: flex;
        flex-direction: column;
        align-content: center;
    }

    img {
        width: 290px;
        height: 150px;
        margin: 30px auto;
        border-radius: 12px;
        box-shadow: 5px 5px 5px;
    }

    h3 {
        margin: 0 auto;
    }

    p {
        padding: 1rem;
        font-size: 16px;
    }

    a {
        margin: 0 auto;
    }

    .icon {
        color: #fff;
    }
    .icon:hover {
        color: #37103B;
    }
`

export default Project