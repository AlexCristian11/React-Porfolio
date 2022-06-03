import React from 'react'
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

function Project(props) {

    const image = process.env.PUBLIC_URL+`/img/${props.img}`;

  return (
    <ProjectStyle>
        <img src={image} alt="" />
        <div className="project-description">
            <h3>Project #{props.id}</h3>
            <p>{props.description}</p>
            <a href={props.url} alt="github link" target="_blank" rel="noopener noreferrer"><FaGithub size="40px" className="icon"/></a>
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
        ${'' /* border-radius: 12px; */}
        box-shadow: 7px 7px black;
    }

    h3 {
        margin: 0 auto;
        font-size: 1.3rem;
    }

    p {
        padding: 1rem;
        font-size: .75rem;
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