import React from 'react'
import styled from 'styled-components';
import image from '../img-src/photo.jpeg';


function About(props) {
  return (
    <AboutStyle id="about-me">
        <div className={props.darkMode ? "dark" : ""} id="about-me-container">
            <div className="description">
                <h2>About Me</h2>
                <p>My name is Popescu Alexandru-Cristian and I am a student from Romania! I am a 20 yrs old very excited to expand my knowledge and meet new people from whom I can learn new things. I study at the Romanian-American University in Bucharest, School of Computer Science for Economics. I started learning web development about 2 years ago and I loved it ever since. I love challenges and puzzles I have to solve, I am determined and eager to solve the problem no matter how hard it is. I am creative and love to turn a website into art and bring new and cool ideas to the table, even if they might be a bit exentric sometimes 😄.</p>
            </div>
            <img src={image} alt="" />
        </div> 
    </AboutStyle>
  )
}

const AboutStyle = styled.div`
    
    #about-me-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;
        justify-content: space-around;
    }

    .description {
        margin-top: 150px;
        width: 60%;
        line-height: 1cm;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;

        h2 {
            font-size: 1.75rem;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2rem;
        }
    }

    img {
        width: 350px;
        height: 350px;
        border-radius: 5%;
        margin-top: 150px;
    }

    ${'' /* Dark mode */}

    .dark {
        background-color: #000;
        color: #fff;
    }
`

export default About