import React from "react";
import Slider from "react-slick";
import './style.css';
const kitchen1 = require('../../images/kitchen-marble.jpeg');
const kitchen2 = require('../../images/kitchen.jpg');

export default class SliderComponent extends React.Component {
    render() {
        var settings = {
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipe: true,
        };
        return (
            <Slider className="SliderComponent" {...settings}>
                <div className="abc">
                    <img style={{ width: '100%', height: '100%' }} src={kitchen1} />
                </div>
                <div>
                    <img style={{ width: '100%', height: '100%' }} src={kitchen2} />
                </div>
                <div>
                    <img style={{ width: '100%', height: '100%' }} src={kitchen1} />
                </div>
                <div>
                    <img style={{ width: '100%', height: '100%' }} src={kitchen2} />
                </div>
                <div>
                    <img style={{ width: '100%', height: '100%' }} src={kitchen1} />
                </div>
            </Slider>
        );
    }
}
