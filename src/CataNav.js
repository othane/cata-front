import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';

import logo from './logo.svg';

import {
    Navbar,
    Nav,
    NavItem
} from 'react-bootstrap';


class CataNav extends Component {
    render() {
        return (
            <Navbar inverse fluid={true}>
                <Navbar.Header>
                    <LinkContainer to="">
                        <Navbar.Brand>
                            <div>
                                <img src={logo} className="App-logo" alt="logo" style={{display: 'inline-block'}}/>
                                &nbsp;
                                <em style={{display: 'inline-block'}}>Cata</em>
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/stores">
                            <NavItem>stores</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/catalog">
                            <NavItem>catalog</NavItem>
                        </LinkContainer>
                    </Nav>

                    <Nav pullRight>
                        <LinkContainer to="/login">
                            <NavItem>login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CataNav;
