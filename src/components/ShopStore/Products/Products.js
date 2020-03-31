import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as productActions from '../../../store/actions/productActions';
import './style.css';
import Product from './Product';
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: 'Products',
    };
  }

  componentDidMount() {
    this.props.getProducts();
  }


  render() {
    return (
      <div className="Content">
        <h1>hello</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: ()=> dispatch(productActions.getProducts()),
  };
};

const mapStateToProps = state => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
