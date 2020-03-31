import React, { Component } from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer';
import * as Constants from '../../constants';
import VendorRegistrationMainComponent from '../VendorRegistration/VendorRegistrationMainComponent';
import RecentPostComponent from '../VendorRegistration/RecentPostComponent';
import BlogImageDescription from './BlogImageDescription';
import './style.css';

class Blog extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <VendorRegistrationMainComponent
                    titleHome={Constants.BLOG}
                    homeNavigate={Constants.HOME}
                    currentNavigation={Constants.DESIGN_TRENDS}
                />
                <Container fluid >
                    <Row>
                        <Col sm="8">
                            <div className="blogButtonlayout">
                            <Button style={{color:'white',backgroundColor:'#a22a2a',borderColor:'#a22a2a'}}>{Constants.DESIGN_TRENDS.toUpperCase()}</Button>
                            <h1>Minimalist design furniture 2016</h1>
                            <p>Posted by  Granitewarehouse</p>
                            <BlogImageDescription/>
                            </div>
                        </Col>
                        <Col sm="4">
                            <div className='blogMainComponent'>
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

export default Blog;
