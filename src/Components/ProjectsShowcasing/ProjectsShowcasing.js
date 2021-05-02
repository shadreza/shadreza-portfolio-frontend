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
import food1 from '../images/food-1.png';
import food2 from '../images/food-2.png';
import quran1 from '../images/quran-1.png';
import quran2 from '../images/quran-2.png';


const ProjectsShowcasing = () => {
    const infoArray=[
        {image:[air],name:"Discover Fly",description:[],gitlinks:["https://github.com/shadreza/Discover-Fly"],livesite:"https://shadreza.github.io/Discover-Fly/"},
        {image:[civic1,civic2,civic3,civic4],name:"Civic Shifter",description:[],gitlinks:["https://github.com/shadreza/Civic-Shifter-Website.git"],livesite:"https://civic-shifter.web.app/"},
        {image:[slider1,slider2,slider3],name:"Fancy Slider",description:[],gitlinks:["https://github.com/shadreza/fancy-slider-resolving"],livesite:"https://shadreza.github.io/fancy-slider-resolving/"},
        {image:[quran1,quran2],name:"Al Quran",description:[],gitlinks:["https://github.com/shadreza/Al-Quran"],livesite:"https://shadreza.github.io/Al-Quran/"},
        {image:[shikkhok1,shikkhok2,shikkhok3,shikkhok4],name:"Shikkhok",description:[],gitlinks:["https://github.com/shadreza/Shikkhok-Website-Client.git","https://github.com/shadreza/Shikkhok-Website-Server.git"],livesite:"https://hay-store.web.app/"},
        {image:[food1,food2],name:"Cooking Master",description:[],gitlinks:["https://github.com/shadreza/cooking-master"],livesite:"https://shadreza.github.io/cooking-master/"}
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