import React from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';
import * as Constants from '../../constants';
import './style.css';

const ProductInformationCard = (props) => {
    return (
        <div className='container'>
            <Card className="cardWrapper">
                <CardImg className="imageWrapper" src={require('../../images/2.jpg')} >
                </CardImg>
                <CardBody >
                    <CardText className="descriptionCardWrapper">{props.description}</CardText>
                </CardBody>

            </Card>
        </div>
    );
};

export default ProductInformationCard;