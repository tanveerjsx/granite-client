import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import Header from '../Header/Header';
import Footer from '../Footer'
import ProductSlider from './ProductInformationSlider';
import ProductinfoHeader from './ProductInformationHeader';
import './style.css';
import * as Constants from '../../constants';

class ProductClick extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <>
                <Header />
                {
                    <Container fluid={true}>
                        <Row>
                            <Col xs="4">
                                <div className="productsStoreWrapper">
                                </div>
                            </Col>
                            <Col xs="8" className="rightDetails">
                                <br />
                                <br />
                                <h1>{Constants.ABSOLUTE_BLACK}</h1>
                                <br />
                                <p>{Constants.GRANITE_STONE}</p>
                                <br />
                                <span>$<span>22.73</span></span><span>$<span>15.69</span></span> <br />
                                <br />
                                <Button className="myhbtn">ADD to cart</Button>
                                <br />
                                <br />
                                <br />
                                <span>{Constants.ADD_TO_WISHLIST}</span> <span>Compare</span>
                                <hr />
                                <span className="bold">Category:</span> <span >Granite</span> <span className="bold">Tags:</span>
                                <span> {Constants.TAG_PRODUCT}</span>
                            </Col>
                        </Row>
                        <hr />
                        <ProductinfoHeader />
                        <hr />
                        <ProductSlider />
                    </Container>

                }
                <Footer />
            </>
        );
    }
}
const mapStateToProps = state => {
    return {
        userProducts: state.products.userProducts
    }
}
export default connect(mapStateToProps)(ProductClick);