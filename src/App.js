import React, { Component } from 'react';
import './App.css';

import CataNav from './CataNav'

class App extends Component {
    render() {
        return (
            <div className="container">
                <CataNav></CataNav>
                {this.props.children}
            </div>
        );
    }
}

export default App;
