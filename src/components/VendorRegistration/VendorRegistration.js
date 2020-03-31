import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';
import * as Constants from '../../constants';
import VendorRegistrationMainComponent from './VendorRegistrationMainComponent';
import RecentPostComponent from './RecentPostComponent';
import VendorRegistrationForm from './VendorRegistrationForm';
import './style.css';

class VendorRegistration extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <VendorRegistrationMainComponent 
                titleHome={Constants.VENDOR_REGISTRATION}
                homeNavigate={Constants.HOME}
                currentNavigation={Constants.VENDOR_REGISTRATION}
                />
                <Container fluid >
                    <Row>
                        <Col sm="8">
                        <VendorRegistrationForm/>
                        </Col>
                        <Col sm="4">
                            <div className='mainComponent'>
                                <h5>{Constants.CATEGORIES}</h5>
                               <Link to="/category/design-trends"><p>{Constants.DESIGN_TRENDS}</p></Link>
                                <hr />
                                <h5>{Constants.RECENT_POSTS}</h5>
                                <RecentPostComponent />
                                <RecentPostComponent />
                                <h5>{Constants.OUR_INSTAGRAM}</h5>
                                <p>{Constants.INSTAGRAM_DESCRIPTION}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </>
        );
    }
}

export default VendorRegistration;
