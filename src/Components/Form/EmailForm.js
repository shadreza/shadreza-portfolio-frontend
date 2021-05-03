import React from 'react';
import './EmailForm.css';
import Form from 'react-bootstrap/Form';
import { Button, Col, FormControl, InputGroup } from 'react-bootstrap';

const EmailForm = () => {
    // let 
    const sendEmail = () =>{

    }
    return (
        <div className="formDiv">
            <h2>Your Opinion</h2>
                <Form>
                    <Form.Row className="align-items-center formStarts">
                        <Col sm={6} className="my-1">
                        <Form.Label htmlFor="inlineFormInputName" srOnly>
                            Name
                        </Form.Label>   
                        <Form.Control id="inlineFormInputName" placeholder="your name" />
                        </Col>
                        <Col sm={6} className="my-1">
                        <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                            Mail
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="your mail" />
                        </InputGroup>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center">
                        <Col sm={12} className="textarea">
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>Your Thoughts</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" aria-label="your thoughts" />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center">
                        <Col className="sunmitButton">
                            <Button variant="success" type="submit" >
                                Submit Your Response
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
        </div>
    );
};

export default EmailForm;