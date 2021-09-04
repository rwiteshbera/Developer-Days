import React from 'react'
import "./style/Home.css"

import ProfilePicture from "./images/profile.jpg";
function Home() {
    return (
        <div className="home" id='home'>
            <img src={ProfilePicture} alt="Profile"></img>
            <div>
                <h1>Rwitesh Bera</h1>
                <p id="about">Hi!, I am Rwitesh Bera. I am an undergradute student and pursuing my B.Tech. in Computer Science and Engineering. I am passionate about Development and love to learn new things. Currently I am learning Web Development and exploring various fields.</p>
            </div>
        </div>
    )
}

export default Home
