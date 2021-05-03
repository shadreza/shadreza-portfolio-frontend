import React from 'react';
import './AboutMeInHomePage.css';
import fast from '../images/fast.svg';
import code from "../images/code.svg";
import learner from "../images/learner.svg";
import communication from "../images/communication.svg";
import education from "../images/education.svg";
import personal from "../images/personal.svg";
const AboutMeInHomePage = () => {
    return (
                
                    <div className="aboutMeInHomeDiv">

                        <h1>Know Me!</h1>
                        <br/>
                        <br/>
                        <br/>
                        
                        <div className="infoGrid">
                         
                            <div className="leftInfo">
                                <img className="images" src={fast} alt=""/>
                                <p className="heading">Keep Updated</p>
                                <div className="innerMsg">
                                    <p>Being in the field of development I know the necessity of being up-to-date.That's why I always in learning in keeping myself at the front</p>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <img className="images" src={code} alt=""/>
                                <p className="heading">Love To Code</p>
                                <div className="innerMsg">
                                    <p>Being a CSE student I have the love for code from my college life and Have solved more than <a href="https://www.stopstalk.com/user/profile/shadreza"><span className='colorRed'>410+ problems</span></a> around many famous Online Judges and also have the passion of <span className="colorOrange">problem solving</span> and <span className="colorBlue">critical thinking</span></p>
                                </div>
                            </div>
                           
                            <div className="leftInfo">
                                <img className="images" src={learner} alt=""/>
                                <p className="heading">Fast Learner</p>
                                <div className="innerMsg">
                                    <p>Alhamdulillah ahve the ability to learn things fast and make the concepts crystal clear. Understand things easily and try to take it ti the heart</p>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <img className="images" src={communication} alt=""/>
                                <p className="heading">Good Communicator</p>
                                <div className="innerMsg">
                                    <p>For any development purpose I am aware of teamwork and great communication skills. Have worked personally and in teams and love to bond friendship with the other teammates and excell at work</p>
                                </div>
                            </div>
                    
                            <div className="leftInfo">
                                <img className="images" src={education} alt=""/>
                                <p className="heading">Education</p>
                                <div className="innerMsg">
                                    <p>Completing my B.Sc in CSE from Military Institute Of Science & Technology [MIST] and at present I am in my 3rd year and maintaining a cgpa of 3.30</p>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <img className="images" src={personal} alt=""/>
                                <p className="heading">Personal Life</p>
                                <div className="innerMsg">
                                    <p>From Dhaka , Bangladesh.
                                    <br/> Happily Married for the past 03 years 
                                    <br/> Staying at Mohammadpur , Dhaka , Bangladesh
                                    </p>                   
                                </div>
                            </div>
                        </div>
                    
                    </div>
                
      
    );
};

export default AboutMeInHomePage;