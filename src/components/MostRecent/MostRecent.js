import React from 'react';
import RecentImage from './RecentImage';
import { Container, Row, Col, Button } from 'reactstrap';
import * as Constants from '../../constants';
import IMG from '../../images/image1.jpg';
import IMG2 from '../../images/image2.jpg';
import IMG3 from '../../images/image3.jpg';
import './style.css';

const RecentComponent = (props) => {
    return (

        <div>

            <br />
            <Container fluid={true}>
                <Row>
                    <Col xs="3">
                        <div className="my">
                            <h2>{Constants.GRANITE_WAREHOUSE}</h2>
                            <h3 >{Constants.PROFESSIONAL}</h3>
                            <h3> {Constants.COUNTERTOPS_INSTALLATION}</h3>
                            <br />
                            <br />
                            <p>{Constants.MOST_RECENT_DESCRIPTION}</p>

                            <div><Button className="freebut" size="lg">{Constants.FREE_ESTIMATE_NOW}</Button></div>
                            
                           
                        </div>
                    </Col>
                    <Col xs="9">
                        <Row className="headerMost">
                            <h2>{Constants.MOST_RECENT_PROJECTS}</h2>
                        </Row>
                        <Row>
                            <RecentImage images={IMG} />
                            <RecentImage images={IMG2} />
                            <RecentImage images={IMG3} />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default RecentComponent;
