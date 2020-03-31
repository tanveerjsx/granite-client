import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/Header';
import Footer from '../Footer';
import * as Constants from '../../constants';
import VendorRegistrationMainComponent from '../VendorRegistration/VendorRegistrationMainComponent';
import CustomerSupportCard from '../CustomerSupportCards/CustomerSupportCard';
import './style.css';

class DesignTrends extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <VendorRegistrationMainComponent
                    titleHome={Constants.DESIGN_TRENDS}
                    homeNavigate={Constants.HOME}
                    currentNavigation={Constants.DESIGN_ARCHIVE_BY_CATEGORY}
                />
                <div className="designTrendComponnet">
                <Container fluid >
                    <Row>
                        <Col sm="4">
                            <CustomerSupportCard
                                title="Non vestibulum lacus sociosqu"
                                subtitle="By  Granitewarehouse"
                                description="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac."
                            />
                        </Col>
                        <Col sm="4">
                        <CustomerSupportCard
                                title="Non vestibulum lacus sociosqu"
                                subtitle="Posted by Granitewarehouse"
                                description="A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adipiscing aliquet..."
                            />
                        </Col>
                        <Col sm="4">
                        <CustomerSupportCard
                                title="Non vestibulum lacus sociosqu"
                                subtitle="Posted by Granitewarehouse"
                                description="Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac."
                            />
                        </Col>
                    </Row>
                </Container>
                </div>
                <Footer />
            </>
        );
    }
}

export default DesignTrends;
