import React from 'react';
import './AboutMeInHomePage.css';


const AboutMeInHomePage = () => {
    return (
                
                    <div className="aboutMeInHomeDiv">

                        <h1>Know Me!</h1>
                        <br/>
                        <br/>
                        <br/>
                        
                        <div className="infoGrid">
                         
                            <div className="leftInfo">
                                <img className="images" src="https://www.flaticon.com/svg/vstatic/svg/3043/3043536.svg?token=exp=1619946839~hmac=a9689315f065de1bcb6d70d7a55e2564" alt=""/>
                                <p className="heading">Keep Updated</p>
                                <div className="innerMsg">
                                    <p>Being in the field of development I know the necessity of being up-to-date.That's why I always in learning in keeping myself at the front</p>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <img className="images" src="https://www.flaticon.com/svg/vstatic/svg/2881/2881142.svg?token=exp=1619947089~hmac=1df039168acf4c45b181a771dc59120d" alt=""/>
                                <p className="heading">Love To Code</p>
                                <div className="innerMsg">
                                    <p>Being a CSE student I have the love for code from my college life and Have solved more than <a href="https://www.stopstalk.com/user/profile/shadreza"><span className='colorRed'>410+ problems</span></a> around many famous Online Judges and also have the passion of <span className="colorOrange">problem solving</span> and <span className="colorBlue">critical thinking</span></p>
                                </div>
                            </div>
                           
                            <div className="leftInfo">
                                <img className="images" src="https://www.flaticon.com/svg/vstatic/svg/3655/3655586.svg?token=exp=1619947252~hmac=37cd7c050b77007a3b6274443eee618e" alt=""/>
                                <p className="heading">Fast Learner</p>
                                <div className="innerMsg">
                                    <p>Alhamdulillah ahve the ability to learn things fast and make the concepts crystal clear. Understand things easily and try to take it ti the heart</p>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <img className="images" src="https://www.flaticon.com/svg/vstatic/svg/745/745205.svg?token=exp=1619947386~hmac=85dc88a43f03b9b538798bccfde79645" alt=""/>
                                <p className="heading">Good Communicator</p>
                                <div className="innerMsg">
                                    <p>For any development purpose I am aware of teamwork and great communication skills. Have worked personally and in teams and love to bond friendship with the other teammates and excell at work</p>
                                </div>
                            </div>
                    
                            <div className="leftInfo">
                                <img className="images" src="https://image.flaticon.com/icons/png/128/3534/3534031.png" alt=""/>
                                <p className="heading">Education</p>
                                <div className="innerMsg">
                                    <p>Completing my B.Sc in CSE from Military Institute Of Science & Technology [MIST] and at present I am in my 3rd year and maintaining a cgpa of 3.30</p>
                                </div>
                            </div>
                            <div className="rightInfo">
                                <img className="images" src="https://image.flaticon.com/icons/png/128/2922/2922506.png" alt=""/>
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