import React, { Component } from 'react';

import Header from './Header';
import Work from './Work';
import Footer from './Footer';


class Cv extends Component {
    render() {
        return(
            <div>
                The CV:
                <Header />
                <Work />
                <Footer />
            </div>
        );
    }
}

export default Cv;
