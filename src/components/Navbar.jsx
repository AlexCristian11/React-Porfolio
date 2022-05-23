import React from 'react'
import styled from 'styled-components';

function Navbar() {
  return (
    <Nav>
        <h1>Alexandru-Cristian Popescu</h1>
        <ul className="nav-list">
            <li className="nav-item">About Me</li>
            <li className="nav-item">Projects</li>
            <li className="nav-item">Skills</li>
            <li className="nav-item">Contact</li>
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
`

export default Navbar