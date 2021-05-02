import React from 'react';
import './SingleProject.css';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const SingleProject = (passedParams) => {
    const infoArray = passedParams.dataArray;
    
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Carousel fade>
                    {
                        infoArray.map(image=>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={image}
                                alt="First slide"
                                />
                            </Carousel.Item>
                        )
                    }
                </Carousel>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProject;