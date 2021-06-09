import React from 'react';
import SingleProject from '../SingleProject/SingleProject';
import './ProjectsShowcasing.css';

import air from '../images/air-1.png';
import civic1 from '../images/civic-1.png';
import civic2 from '../images/civic-2.png';
import civic3 from '../images/civic-3.png';
import civic4 from '../images/civic-4.png';
import slider1 from '../images/slider-1.png';
import slider2 from '../images/slider-2.png';
import slider3 from '../images/slider-3.png';
import shikkhok1 from '../images/shikkhok-1.png';
import shikkhok2 from '../images/shikkhok-2.png';
import shikkhok3 from '../images/shikkhok-3.png';
import shikkhok4 from '../images/shikkhok-4.png';
import todo1 from '../images/todo-redux-1.png';
import todo2 from '../images/todo-redux-2.png';
import todoApp1 from '../images/todoApp1.jpeg';
import todoApp2 from '../images/todoApp2.jpeg';
import AlQuran1 from '../images/AL-QURAN-1.png';
import AlQuran2 from '../images/AL-QURAN-2.png';
import AlQuran3 from '../images/AL-QURAN-3.png';
import AlQuran4 from '../images/AL-QURAN-4.png';
import food1 from '../images/food-1.png';
import food2 from '../images/food-2.png';
import quran1 from '../images/quran-1.png';
import quran2 from '../images/quran-2.png';


const ProjectsShowcasing = () => {
    const infoArray=[
        {image:[shikkhok1,shikkhok2,shikkhok3,shikkhok4],name:"Shikkhok",description:["Online Learning Platform","Users can purcase course , see their purchase history","Admin can modify courses of instructors, add new admins or remove","Web analytics and MERN stack implemented"],gitlinks:["https://github.com/shadreza/Shikkhok-Website-Client.git","https://github.com/shadreza/Shikkhok-Website-Server.git"],livesite:"https://hay-store.web.app/"},
        {image:[civic1,civic2,civic3,civic4],name:"Civic Shifter",description:["Ride Sharing Website Frontend" , "Users Can Login and Create new account" , "Firebase Authentication Was Implemented","Users choose vehicle and from their starting position to destination they will be given rides" , "Google map implemented"],gitlinks:["https://github.com/shadreza/Civic-Shifter-Website.git"],livesite:"https://civic-shifter.web.app/"},
        {image:[todo1,todo2],name:"ToDo Web App",description:["This is a Redux Based App","Users can add tasks to their todo list","Mark the done tasks"],gitlinks:["https://github.com/shadreza/Todo-Redux"],livesite:"https://brave-bell-917aad.netlify.app/"},
        {image:[todoApp1,todoApp2],name:"ToDo Android App",description:["This is a React Native App","This is an android app that can be downloaded over the given app link","Users can add tasks to their todo list","Mark the done tasks"],gitlinks:["https://github.com/shadreza/Todo-App---React-Native"],livesite:"https://expo.io/artifacts/d8ea5bc3-0fc8-47ba-9db0-9dfe14e9d7a8"},
        {image:[AlQuran1,AlQuran2,AlQuran3,AlQuran4],name:"Quran Web",description:["Added Additional Information To Every Capter Of THe Quran" , "All The Surahs Have Quranic and English Translates" , "Audio Of Mishary bin Rashid Alafasy Also Added" , "One time load takes time but if local storage not cleared then each and every time blazing fast loadings"],gitlinks:["https://github.com/shadreza/Quran-Web"],livesite:"https://shadreza.github.io/Quran-Web/code-resources/index.html"},
        {image:[slider1,slider2,slider3],name:"Fancy Slider",description:["Online Image Loader Website That collects relevant images from enterd keyword from PIXABAY API","Additional Dynamic time sets more than one picture for a carousal that can also be controlled by user" , "Shows The Like And View Count Of Every Image"],gitlinks:["https://github.com/shadreza/fancy-slider-resolving"],livesite:"https://shadreza.github.io/fancy-slider-resolving/"},
        {image:[quran1,quran2],name:"Al Quran",description:["The Holy Quran And Its English ranslation" , "One Page Quran With All The 114 suras or cahpters"],gitlinks:["https://github.com/shadreza/Al-Quran"],livesite:"https://shadreza.github.io/Al-Quran/"},
        {image:[air],name:"Discover Fly",description:["Online Ticketing System","Corner Cases & Technical Stuffs Were Integrated"],gitlinks:["https://github.com/shadreza/Discover-Fly"],livesite:"https://shadreza.github.io/Discover-Fly/"},
        {image:[food1,food2],name:"Cooking Master",description:["Online Cooking Website","Meals are shown with details and also cooking instruction even with both ingrediens and video","API usage and searchbar functionality implemented"],gitlinks:["https://github.com/shadreza/cooking-master"],livesite:"https://shadreza.github.io/cooking-master/"}
    ]
    return (
        <div className="allProjectsDiv">
            <br/><br/>
            <h1 className="headingOfProject">Some Projects...</h1>
            <br/><br/><br/>
            <div className="gridFormat">
                {
                    infoArray.map(currentInfo=><SingleProject dataArray={currentInfo}></SingleProject>)
                }
            </div>
        </div>
    );
};

export default ProjectsShowcasing;