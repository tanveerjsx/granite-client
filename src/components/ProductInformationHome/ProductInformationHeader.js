import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import './style.css';
import { Routes } from './RoutsData';
import Description from './HeaderComponents/Description';
import AdditionalComponent from './HeaderComponents/AdditionalComponent'
import Review from './HeaderComponents/HeaderReview';
import ShippingDelivery from './HeaderComponents/ShippingDelivery';


class ProductinfoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeValue:null
    }
  } 
  routeClick = (route) => {
    this.setState({
      routeValue: route.value
    })
  }
  render() {
    return (
      <div>
        <Container className="mydata">
          <Row>
            {Routes.map(route => (
              <div xl onClick={() => this.routeClick(route)}> <h5> {route.name} </h5> </div>
            ))}
          </Row>
        </Container>
        {this.state.routeValue == 1 && <Description />}
        {this.state.routeValue == 2 && <AdditionalComponent />}
        {this.state.routeValue == 3 && <Review />}
        {this.state.routeValue == 4 && <ShippingDelivery />}
      </div>
    );
  }
}

export default ProductinfoHeader;