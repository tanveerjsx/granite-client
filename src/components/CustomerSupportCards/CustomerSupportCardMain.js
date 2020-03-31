import React from 'react';
import Slider from "react-slick";
import CustomerSupportCard from './CustomerSupportCard';
import './style.css';

export default class CustomerSupportCardMain extends React.Component {
    render() {
        var settings = {
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            swipe: true,
            rows: 1
        };
        return (
            <Slider className="sliderComponent" {...settings}>
                <CustomerSupportCard 
                title="Non vestibulum lacus sociosqu"
                subtitle="Posted by Granitewarehouse"
                description="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac."
                />
                <CustomerSupportCard 
                  title="Non vestibulum lacus sociosqu"
                  subtitle="Posted by Granitewarehouse"
                  description="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac."
                />
                <CustomerSupportCard 
                  title="Non vestibulum lacus sociosqu"
                  subtitle="Posted by Granitewarehouse"
                  description="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac."
                />
                <CustomerSupportCard
                  title="Non vestibulum lacus sociosqu"
                  subtitle="Posted by Granitewarehouse"
                  description="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac."
                />
            </Slider>

        );
    }
}