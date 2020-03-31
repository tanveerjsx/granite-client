import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as Constants from '../../constants';
import './style.css';


const GetCreative = (props) => {
    return (
            <div className="creativeDiv">
            <Container fluid={true} >
                <Row>
                    <Col xs={{ size: 4 }}>
                        <h1>{Constants.Let_Creative}</h1>
                        <p>{Constants.WOODMART_BEST}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{ offset: 1, size: 3 }}>
                        <h4>{Constants.GRAPHIC_DESIGN}</h4>
                        <p>{Constants.CURABITUR_LACINIA}</p>

                        <h4>{Constants.WEB_DESIGN}</h4>
                        <p>{Constants.BY_READABLE}</p>
                    </Col>
                    <Col xs={{ size: 3 }}>
                        <h4>{Constants.BRANDING}</h4>
                        <p>{Constants.FACT_READER}</p>

                        <h4>{Constants.PHOTOGRAPHY}</h4>
                        <p>{Constants.THE_POINT}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetCreative;