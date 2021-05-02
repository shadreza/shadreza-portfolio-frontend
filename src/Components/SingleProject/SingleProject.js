import React from 'react';
import './SingleProject.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const SingleProject = (passedParams) => {
    const infoArray = passedParams.dataArray;
    console.log(infoArray)
    return (
        <div>
            {
                    <Card className="card" style={{ width: '38rem' }}>
                        <Carousel fade>
                            {
                                infoArray.image.map(currentImage =>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={currentImage}
                                        alt="First slide"
                                        />
                                    </Carousel.Item>
                                )
                            }
                        </Carousel>
                        <Card.Body>
                            <Card.Title><strong>{infoArray.name}</strong></Card.Title>

                            <Card.Text>
                                {
                                    infoArray.description.map(descriptionOfNow=><p>{descriptionOfNow}</p>)
                                }
                            </Card.Text>
                            <div className="btnFlex">
                                {infoArray.gitlinks.length >= 1 && <a target="blank" href={infoArray.gitlinks[0]}><Button variant="primary">Frontend Code</Button></a>}
                                {infoArray.gitlinks.length === 2 && <a target="blank" href={infoArray.gitlinks[1]}><Button variant="primary">Backend Code</Button></a>}
                                {infoArray.livesite !== "" && <a target="blank" href={infoArray.livesite}><Button variant="success">Livesite Link</Button></a>}
                            </div>
                        </Card.Body>
                    </Card>    
            }
        </div>
    );
};

export default SingleProject;