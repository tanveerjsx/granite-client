import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './style.css';

const CustomerSupportCard = (props) => {
    return (
        <div className='container'>
            <Card className="cardWrapper">
                <CardImg className="imageWrapperCustomerSupport" src={require('../../images/image1.jpg')} />
                <CardBody >
                    <CardTitle className="titleCardWrapper">{props.title}</CardTitle>
                    <CardSubtitle className="subtitleCardWrapper">{props.subtitle}</CardSubtitle>
                    <CardText className="descriptionCardWrapper">{props.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default CustomerSupportCard;
