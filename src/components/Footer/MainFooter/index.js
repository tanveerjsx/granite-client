import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container } from 'reactstrap';
import { FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import * as Constants from '../../../constants';
import './style.css';

class MainFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm="9">
            <div className="mainFooterWrapper">
              <img className="imageWrapperGranite" src={require('../../../images/GraniteLogo.png')} />
              <p className="address">
                <FaLocationArrow />
                {Constants.FOOTER_ADDRESS}</p>
              <p className="address">
                <FaMobileAlt />
                {Constants.FOOTER_PHONE_NUMBER}</p>
              <p className="address">
                <IoIosMail />
                {Constants.FOOTER_EMAIL}</p>
            </div>
          </Col>
          <Col sm="3">
            <div className="productFooterWrapper">
              <h4>{Constants.FOOTER_OUR_PRODUCTS}</h4>
              {
                this.props.categories?.map(categoryName=>(
                  <p>{categoryName.name}</p>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    categories: state.products.categories
  }
}
export default connect(mapStateToProps)(MainFooter);
