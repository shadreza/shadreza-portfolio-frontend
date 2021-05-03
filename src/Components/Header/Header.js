import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Header.css';
import Homepage from '../Homepage/Homepage';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import ProjectsShowcasing from '../ProjectsShowcasing/ProjectsShowcasing';
import Blogs from '../Blogs/Blogs';



const Header = () => {

    return (
        <Router>
            <div className="headerMainDiv">
                <Navbar className="navbar" bg="light" expand="lg">
                    <Navbar.Brand className="navbar-text">Shad Reza</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/'>
                            <Nav.Link className="navbar-text-toggler">Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/about-me'>
                            <Nav.Link className="navbar-text-toggler">About me</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/projects'>
                            <Nav.Link className="navbar-text-toggler">Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/blogs'>
                            <Nav.Link className="navbar-text-toggler">Blogs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/docs'>
                            <Nav.Link className="navbar-text-toggler">Docs</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/contact-me'>
                            <Nav.Link className="navbar-text-toggler">Contact me</Nav.Link>
                            </LinkContainer>                           
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <Switch>   
                <Route path='/'>
                    <Homepage></Homepage>
                </Route>
                <Route path='/about-me'>
                    <AboutMe></AboutMe>
                </Route>
                <Route path='/projects'>
                    <ProjectsShowcasing></ProjectsShowcasing>
                </Route>
                <Route path='/blogs'>
                    <Blogs></Blogs>
                </Route>
                <Route path='/contact-me'>
                    <ContactMe></ContactMe>
                </Route>
            </Switch>

        </Router>
    );
};

export default Header;