import React, { Component } from 'react';
import './style.css';
import { Container, Row, Col } from 'reactstrap';
import * as Constants from '../../../constants';

const ShippingDelivery = (props) => {
    return (

        <Container fluid={true} className="delivery">
            <Row>
                <Col md={{ size: 6, offset: 6 }}>
                    <br />
                    <h2>{Constants.SHIPPING_TITLE1}</h2>
                    <br />
                    <p>{Constants.SHIPPINT_DETAIL1}</p>
                    <h2>{Constants.SHIPPING_TITLE2}</h2>
                    <br />
                    <p>{Constants.SHIPPINT_DETAIL2}</p>
                </Col>
            </Row>
        </Container>

    );
};


export default ShippingDelivery;