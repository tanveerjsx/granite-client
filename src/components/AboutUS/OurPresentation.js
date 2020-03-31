import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as Constants from '../../constants';
import './style.css';


const OurPresentaion = (props) => {
    return (

        <div className="presentaionVideo">
            <Container fluid={true}>
                <Row>
                    <Col sm={{ size: 6, order: 3, offset: 3 }}>
                        <p>{Constants.XTEMOS_IS_CREATIVE}</p>
                        <h1>{Constants.OUR_PRESENTATION}</h1>
                        <p>{Constants.I_AM_SO_HAPPY}</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={{ size: 6 }}>
                        <iframe className="videoPresentaion" src="https://www.youtube.com/embed/TJ1SDXbij8Y?feature=oembed"></iframe>
                        <h4 className="myabouttext">{Constants.OUR_COMPANY_FACTS}</h4>
                        <h4 className="myabouttext">{Constants.SHOW_MORE}</h4>
                    </Col>
                    <Col sm={{ size: 6 }}>
                        <iframe className="videoPresentaion" src="https://www.youtube.com/embed/TJ1SDXbij8Y?feature=oembed"></iframe>
                        <h4 className="myabouttext">{Constants.OUR_COMPANY_FACTS}</h4>
                        <h4 className="myabouttext">{Constants.SHOW_MORE}</h4>

                    </Col>

                </Row>
            </Container>



        </div>
    );
};

export default OurPresentaion;


