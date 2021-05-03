import React from 'react';
import pic1 from '../images/shad-cropped.png';
import './Intro.css';
import useTypewriter from "react-typewriter-hook"
// function MagicWriter(word) {
//     const typing = useTypewriter(word)
//     return typing
//   }
const Intro = () => {
    return (
        <div className="introDiv">
            <div className="rightPic">
                <img src={pic1} alt=""/>
            </div>
            <div className="leftText">
                <p className="hello">Hello I'm</p>
                <p className="myName">{useTypewriter("Shad Reza")}</p>
                <p className="profession">Web <span className="devPortion">Developer</span></p>
                <p className="messg">available for hiring as <span className="fullTime">full-time</span> web developer!</p>
            </div>
            {/* <div className="rightPic">
                <img src={pic1} alt=""/>
            </div> */}
        </div>
    );
};

export default Intro;