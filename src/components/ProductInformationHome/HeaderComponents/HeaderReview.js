import React from 'react';
import './style.css';
import { Container, Col, Row } from 'reactstrap';
import * as Constants from '../../../constants';

const Review = (props) => {
    return (
        <Container fluid={true} className="review">
            <Row>
                <Col md={{ size: 1 }}>
                    <h5>{Constants.REVIEW}</h5>
                </Col>
                <Col md={{ size: 5, offset: 6 }}>
                    <p>{Constants.REVIEW_DETAILS}</p>
                </Col>
            </Row>

        </Container>
    );
};


export default Review;