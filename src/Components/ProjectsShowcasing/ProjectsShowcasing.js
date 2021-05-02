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
    return (
        <div className="allProjectsDiv">
            <br/><br/>
            <h1 className="headingOfProject">Some Projects...</h1>
            <br/><br/><br/>
            <div className="gridFormat">
                <SingleProject dataArray={[{image:[],description:[],gitlinks:[],livesite:""},{image:[],description:[],gitlinks:[],livesite:""},{image:[],description:[],gitlinks:[],livesite:""},{image:[],description:[],gitlinks:[],livesite:""},{image:[],description:[],gitlinks:[],livesite:""},{image:[],description:[],gitlinks:[],livesite:""}]}></SingleProject>
            </div>
        </div>
    );
};

export default ProjectsShowcasing;