import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <Nav>
        <nav className={props.darkMode ? "dark" : ""}>
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
                <Link to="/contact">
                    <li className="nav-item" id="contact">
                        Contact
                    </li>
                </Link>
                <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </ul>
            
        </nav>
    </Nav>
  )
}

const Nav = styled.div`
    
    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
        margin: 0 auto;
    }

    .nav-list {
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    #contact {
        margin-right: 30px;
        text-decoration: none;
        font-weight: bold;
        color: #000;
        font-size: 1.3rem;
    }

    nav.dark #contact {
        color: #fff;
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

    .toggler {
        display: flex;
        align-items: center;
    }
    
    .toggler p {
        font-size: 1rem;
        font-weight: 600;
    }

    .toggler--slider {
        width: 25px;
        height: 13px;
        background-color: #2B283A;
        border-radius: 2rem;
        margin-inline: 7px;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        border: 1px solid #000;
        box-sizing: content-box;
    }

    .toggler--slider--circle {
        height: 13px;
        width: 13px;
        background-color: #fff;
        border-radius: 50%;
    }

    .toggler--light {
        color: #2B283A;
    }

    .toggler--dark {
        color: #D5D4D8;
    }

    ${'' /* Dark Mode styling */}

    nav.dark {
        background-color: #000;
        color: #fff;
    }

    nav.dark .nav-item a{
        color: #fff;
    }

    nav.dark .toggler--slider {
        border-color: white;
        background-color: #F5F5F5;
    }

    nav.dark .toggler--slider--circle {
        background-color: black;
    }

    nav.dark .toggler--light {
        color: #918E9B;
    }

    nav.dark .toggler--dark {
        color: #fff;
    }

    nav.dark .toggler--slider {
        justify-content: flex-end;
    }

`

export default Navbar