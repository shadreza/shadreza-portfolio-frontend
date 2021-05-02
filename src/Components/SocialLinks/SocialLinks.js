import React from 'react';
import './SocialLinks.css';
import stopstalk from '../images/stopstalk.png';
import facebook from '../images/facebook.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

const SocialLinks = () => {
    return (
        <div className="socialLinksDiv">
            <a href="https://github.com/shadreza" target="blank">
                <img src={github} alt=""/>
            </a>
            
            <a href="https://www.linkedin.com/in/shadreza100/" target="blank">
            <img src={linkedin} alt=""/>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100009732251679" target="blank">
            <img src={facebook} alt=""/>
            </a>

            <a href="https://www.stopstalk.com/user/profile/shadreza">
                <img src={stopstalk} alt=""/>
            </a>
            
            
        </div>
    );
};

export default SocialLinks;
