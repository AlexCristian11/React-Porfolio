import React from 'react'
import styled from 'styled-components';
import image from '../img-src/placeholder.jpg';


function About() {
  return (
    <AboutStyle>
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
    </AboutStyle>
  )
}

const AboutStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;

    .description {
        width: 60%;
        line-height: 1cm;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
    }

    img {
        width: 350px;
        height: 350px;
        border-radius: 5%;
    }
`

export default About