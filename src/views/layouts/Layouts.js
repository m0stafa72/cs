import React, { Component } from 'react';
import TopNav from './top-navs/TopNav';
import Header from './top-navs/Header';

import App from '../App';

class Layouts extends Component {
    render() {
        return (
            <div>
                <TopNav/>
                <Header />

                <App />


            </div>
        );
    }
}

export default Layouts;