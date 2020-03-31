import React, { Component } from 'react';
import HeaderAboutUs from './HeaderAboutUs';
import AboutSuccess from './AboutSuccess';
import OurPresentaion from './OurPresentation';
import GetCreative from './GetCeative';


class AboutMain extends Component {
    render(){

        return(
            <div>
                <HeaderAboutUs/>
                <AboutSuccess/>
                <GetCreative/>
                <OurPresentaion/>
            </div>
        );
    }
}

export default AboutMain;