import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardMain from '../Card/CardMain';
import Header from '../Header/Header';
import './style.css';
import { Container, Row } from 'reactstrap';

class ProductStores extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.userProducts)
    return (
      <>
        <Header />
        <h1 style={{ textAlign: 'center', boxShadow: '0 5px 5px #dadada' }}>VENDOR STORES</h1>
        <Container fluid>
          {
            this.props.userProducts?.map(user => (
              <div className="storeWrapper">
                <>
                  <h2 className="HeadingLayout">{user.lastName.toUpperCase()}</h2>
                  <Row>
                    {
                      user.products.map(product => (
                        <CardMain data={product} />
                      ))
                    }
                  </Row>
                </>
              </div>
            ))
          }
        </Container>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    userProducts: state.products.userProducts
  }
}
export default connect(mapStateToProps)(ProductStores);
