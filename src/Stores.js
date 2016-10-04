import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import Relay from 'react-relay';


// eslint-disable-next-line
class Store extends Component {
    render() {
        var storeId = this.props.params.storeId;

        return (
            <Row>
                <Col md={12}>
                    <h2>Store {storeId}</h2>
                </Col>
            </Row>
        );
    }
}


export class Stores extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <ul>
                        <li>store 1</li>
                        <li>store 2</li>
                    </ul>
                </Col>
            </Row>
        );
    }
}

