import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import cv from './cv.png';
import resume1 from './resume-1.png';
import resume2 from './resume-2.png';
import './PDFFiles.css';

const PDFFiles = () => {
    return (
        <div className="pdfDiv">
            <h1>My Docs</h1>
            <br/><br/><br/>
            <div className="pdfs">
            <Card className="card" style={{ width: '38rem' }}>
                        <Carousel fade>
                        <Carousel.Item>
                            <img className="d-block w-100" src={cv} alt="CV" />
                        </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title><strong>My CV</strong></Card.Title>

                            <Card.Text>
                                <p>Here You Can Find My CV</p>
                            </Card.Text>
                            <div className="btnFlex">
                                <a href="https://drive.google.com/file/d/1ZbCDkt4QfFx1KBWT3HU0WeB38NIplj4Y/view?usp=sharing" target="blank">
                                    <Button variant="primary"> Preview My CV</Button>
                                </a>
                                <a href="./Shad-Reza-CV.pdf" download>
                                    <Button variant="primary"> Download My CV</Button>
                                </a>
                            </div>
                        </Card.Body>
                    </Card>
                    
                    <Card className="card" style={{ width: '38rem' }}>
                        <Carousel fade>
                            <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={resume1}
                                        alt="Resume"
                                        />
                                    </Carousel.Item>
                            <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src={resume2}
                                        alt="Resume"
                                        />
                                    </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Title><strong>My Resume</strong></Card.Title>

                            <Card.Text>
                                <p>Here You Can Find My Resume</p>
                            </Card.Text>
                            <div className="btnFlex">
                                <a href="https://drive.google.com/file/d/1RoAHqN-8My36ATeisdDKfXEKgvMk1B0s/view?usp=sharing" target="blank">
                                    <Button variant="primary"> Preview My Resume</Button>
                                </a>
                                <a href="./Shad-Reza-Resume.pdf" download>
                                    <Button variant="primary"> Download My Resume</Button>
                                </a>
                            </div>
                        </Card.Body>
                    </Card></div>            
        </div>
    );
};

export default PDFFiles;