import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import './style.css';
const CardComponent = (props) => {
    return (
        <div>
             <Link to="/productinformationhome">
            <Card className="cardHomeWrapper">
                <CardImg className="imageWrapperCardComponent" src={props.image} alt="" />
                <p className="descriptionHome">{props.Description}</p>
                <p className="descriptionHomePrice">{props.price}</p>
            </Card>
            </Link>
        </div>
    );
};

export default CardComponent;
