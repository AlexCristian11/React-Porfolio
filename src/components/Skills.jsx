import React from 'react'
import styled from 'styled-components';
import { FaHtml5, FaCss3, FaGithub, FaChrome, FaTerminal, FaFigma, FaUniversalAccess, FaBootstrap, FaDatabase, FaReact} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
function Skills(props) {
  return (
    <Icons id="skills">
        <div className={props.darkMode ? "dark" : ""}>
            <h2>Skills</h2>
            <div className="skills">
                <FaHtml5 className="icon" size="50px"/>
                <FaCss3 className="icon" size="50px"/>
                <SiJavascript className="icon" size="50px"/>
                <FaGithub className="icon" size="50px"/>
                <FaChrome className="icon" size="50px"/>
                <FaTerminal className="icon" size="50px"/>
                <FaFigma className="icon" size="50px"/>
                <FaUniversalAccess className="icon" size="50px"/>
                <FaBootstrap className="icon" size="50px"/>
                <FaDatabase className="icon" size="50px"/>
                <FaReact className="icon" size="50px"/>
            </div>
        </div>
    </Icons>
  )
}

const Icons = styled.div`

    h2 {
        text-align: center;
        margin-bottom: 50px;
        font-size: 1.75rem;
        padding-top: 50px;
    }

    .skills {
        width: 60%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 30px 0 70px 0;
    }

    ${'' /* Dark mode */}

    .dark {
        background-color: #000;
        color: #fff;
    }

    .dark .icon {
        color: #fff;
    }

`


export default Skills