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
                    <Card style={{ width: '25rem' }}>
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
                            <Card.Title>{infoArray.name}</Card.Title>

                            <Card.Text>
                                {
                                    infoArray.description.map(currentDescription=><p>currentDescription</p>)
                                }
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>    
            }
        </div>
    );
};

export default SingleProject;