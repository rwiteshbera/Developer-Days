import React from "react";
import "./style/Skills.css";
import JavaLogo from "./images/java.png";
import Html from "./images/html5.png";
import Css from "./images/css3.png";
import Js from "./images/js.png";
import ReactJS from "./images/react.png";
import GitIcon from "./images/git.png";
import LinuxIcon from "./images/linux.png";
import NodeIcon from "./images/nodejs.png";
import ExpressJS from "./images/express.png";

function Skills() {
    return (
        <div className="skills" id='skills'>
            <h1> Skills </h1>
            <div id="logoDiv">
                <div id="leftLogoDiv">
                    <img src={JavaLogo} alt="Java" />
                    <span>Java</span>
                    <br />
                    <img src={Html} alt="html5" />
                    <span>HTML5</span>
                    <br />
                    <img src={Css} alt="css3" />
                    <span>CSS3</span>
                    <br />
                    <img src={Js} alt="javascript" />
                    <span>Javascript</span>
                    <br />
                    <img src={ReactJS} alt="reactjs" />
                    <span>ReactJs</span>
                </div>
                <div id="rightLogoDiv">
                    <img src={GitIcon} alt="git" />
                    <span>Git</span>
                    <br />
                    <img src={LinuxIcon} alt="linux" />
                    <span>Linux</span>
                    <br />
                    <img src={NodeIcon} alt="nodejs" />
                    <span>NodeJs</span>
                    <br />
                    <img src={ExpressJS} alt="expressjs" />
                    <span>ExpressJs</span>
                </div>
            </div>
        </div>
    );
}

export default Skills;
