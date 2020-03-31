import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import IMG from './images/image1.jpg';

const RecentImage = (props) => {
    return (

        <Col xs = "4" className="imageRaper" >
            <img className="img-fluid" height="500" src={props.images}  /> 
        </Col>
    );
};

export default RecentImage;