import React from 'react';
import './style.css';
import { Container, Row, Col } from "reactstrap";
import * as Constants from '../../../constants';

const AdditionalComponent = (props) => {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={{ size: 6, offset: 3 }}>
                    <div >
                        <div className="aditional"><h5>{Constants.DIMENSIONS}</h5> <p>{Constants.ADDITIONAL_DIMENSIONS_P}</p></div>
                        <div className="aditional"><h5>{Constants.ADDITIONAL_COLOR}</h5> <p>{Constants.ADDITIONAL_COLOR_P}</p></div>
                        <div className="aditional"><h5>{Constants.ADDITIONAL_MATERIAL}</h5> <p>{Constants.ADDITIONAL_MATERIAL_P}</p></div>
                        <div className="aditional"><h5>{Constants.ADDITIONAL_THICKNESS}</h5> <p>{Constants.ADDITIONAL_THICKNESS_P}</p></div>
                        <div className="aditional"> <h5>{Constants.ADDITIONAL_SURFACE}</h5> <p>{Constants.ADDITIONAL_SURFACE_P}</p></div>
                        <div className="aditional1"> <h5>{Constants.ADDITIONAL_COUNTRY}</h5> <p>{Constants.ADDITIONAL_COUNTRY_P}</p></div>

                    </div>
                </Col>


            </Row>


        </Container>
    );
};


export default AdditionalComponent;