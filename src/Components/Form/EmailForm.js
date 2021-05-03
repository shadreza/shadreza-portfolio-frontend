import React, { useState } from 'react';
import './EmailForm.css';
import Form from 'react-bootstrap/Form';
import { Button, Col, FormControl, InputGroup } from 'react-bootstrap';
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
init("user_CDl7Ckr27huEPyVSP6uvi");

const EmailForm = () => {
    let senderMsg = {
        senderName : "annonymus" ,
        senderEmail : "annonymus@email.com" ,
        sendedMessage : ""
    }

    // const [senderName , setSenderName] = useState("");
    // const [senderMail , setSenderMail] = useState("");
    // const [sentMessage , setSentMessage] = useState("");

    const sendEmail = () =>{
        const senderName = document.getElementById('inlineFormInputName').value;
        const senderEmail = document.getElementById('inlineFormInputGroupUserMail').value;
        const sendedMessage = document.getElementById('inlineFormInputMsg').value;
        if(sendedMessage !== ""){
            senderMsg.senderName=senderName;
            senderMsg.senderEmail=senderEmail;
            senderMsg.sendedMessage=sendedMessage;
            emailjs.send('service_stqs46f', 'template_ic3d7bp' , senderMsg , 'user_CDl7Ckr27huEPyVSP6uvi')
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
        }
        else{
            alert('Please Express Your Thoughts On The Textbox');
        }
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
                        <Form.Label htmlFor="inlineFormInputGroupUserMail" srOnly>
                            Mail
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                            <InputGroup.Text>@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl id="inlineFormInputGroupUserMail" placeholder="your mail" />
                        </InputGroup>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center">
                        <Col sm={12} className="textarea">
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text>Your Thoughts</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl as="textarea" id="inlineFormInputMsg" aria-label="your thoughts" />
                            </InputGroup>
                        </Col>
                    </Form.Row>
                    <Form.Row className="align-items-center">
                        <Col className="sunmitButton">
                            <Button variant="success" onClick={()=>sendEmail()}>
                                Submit Your Response
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
        </div>
    );
};

export default EmailForm;