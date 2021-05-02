import React from 'react';
import pic1 from '../images/shad-cropped.png';
import './Intro.css';

const Intro = () => {
    return (
        <div className="introDiv">
            <div className="leftText">
                <p className="hello">Hello, I'm</p>
                <p className="myName">Shad Reza</p>
                <p className="profession">Web <span className="devPortion">Developer</span></p>
                <p className="msg">available for hiring as <span className="fullTime">full-time</span> web developer!</p>
            </div>
            <div className="rightPic">
                <img src={pic1} alt=""/>
            </div>
        </div>
    );
};

export default Intro;