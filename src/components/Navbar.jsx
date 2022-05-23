import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <Nav>
        <h1>Alexandru-Cristian Popescu</h1>
        <ul className="nav-list">
            <li className="nav-item">
                <a href="#about-me">About Me</a>
            </li>
            <li className="nav-item">
                <a href="#projects">Projects</a>
            </li>
            <li className="nav-item">
                <a href="#skills">Skills</a>
            </li>
            <li className="nav-item">
                <a href="#">Contact</a>
            </li>
        </ul>
    </Nav>
  )
}

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    margin: 0 auto;

    .nav-list {
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .nav-item {
        padding: 0 1rem 0 1rem;
        margin: .5rem 0 .5rem 0;
        
    }
    .nav-item a {
        text-decoration: none;
        font-weight: bold;
        color: #000;
        font-size: 1.3rem;
    }
    .nav-item a:hover {
        color: #683fe2;
    }

    h1 {
        font-size: 2rem;
    }

`

export default Navbar