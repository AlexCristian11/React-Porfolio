import React from 'react'
import styled from 'styled-components';
import image from '../img-src/placeholder.jpg';


function About(props) {
  return (
    <AboutStyle id="about-me">
        <div className={props.darkMode ? "dark" : ""} id="about-me-container">
            <div className="description">
                <h2>About Me</h2>
                <p>Hi! My name is Alex , a 19 yrs old student from Romania!</p>
                <p>I study at Romanian-American University in Bucharest , School of Computer Science for Business Management. 
                I started learning web development about 9 months ago and I loved it ever since. 
                I started not knowing anything and now I am getting closer and closer to learning React! 
                I really like making designs and starting to make them into a real website. 
                I would like to expand my knowledge of web development and to work in a company with real challenges to solve.</p>
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