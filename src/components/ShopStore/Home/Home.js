import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as productActions from '../../../store/actions/productActions';
import SliderComponent from '../../Slider/Slider';
import * as Constants from '../../../constants';
import CardMain from '../../Card/CardMain';
import RecentMain from '../../MostRecent/RecentMain';

import ProductsInformationMain from '../../ProductInfromation/ProductInformationMain';
import CustomerSupportCardMain from '../../CustomerSupportCards/CustomerSupportCardMain';
import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: 'Products',
    };
  }

  componentDidMount() {
    this.props.getProducts()
    this.props.getUserProducts();
    this.props.getCategoriesList();
  }
  render() {
    return (
      <div className="content">
        <SliderComponent />
        <ProductsInformationMain type="granite" />
        <h2 className="headingLayout">{Constants.GRANITE_COUNTERTOPS_CLEARANCE}</h2>
        <div className="productsWrapper">
          {
            this.props.products && this.props.products.map(product =>
              <CardMain data={product} />
            )
          }
        </div>
        <ProductsInformationMain type="quartz" />
        <h2 className="headingLayout">{Constants.GRANITE_COUNTERTOPS_CLEARANCE}</h2>
        <div className="productsWrapper">
          {
            this.props.products && this.props.products.map(product =>
              <CardMain data={product} />
            )
          }
        </div>
        <ProductsInformationMain type="quartzite" />
        <h2 className="headingLayout">{Constants.GRANITE_COUNTERTOPS_CLEARANCE}</h2>
        <div className="productsWrapper">
          {
            this.props.products && this.props.products.map(product =>
              <CardMain data={product} />
            )
          }
        </div>
        <ProductsInformationMain type="porcelain" />
        <h2 className="headingLayout">{Constants.GRANITE_COUNTERTOPS_CLEARANCE}</h2>
        <div className="productsWrapper">
          {
            this.props.products && this.props.products.map(product =>
              <CardMain data={product} />
            )
          }
        </div>
        <ProductsInformationMain type="marble" />
        <h2 className="headingLayout">{Constants.GRANITE_COUNTERTOPS_CLEARANCE}</h2>
        <div className="productsWrapper">
          {
            this.props.products && this.props.products.map(product =>
              <CardMain data={product} />
            )
          }
        </div>
        <div className="ProductsWrapper">
          <RecentMain />
        </div>
        <div className="customerSupportHeader">
          <h2 className="graniteHeading">{Constants.GRANITE_WAREHOUSE}</h2>
          <h2>{Constants.OUR_CUSTOMERS_SAYING}</h2>
        </div>
        <div>
          <CustomerSupportCardMain />
        </div>


      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(productActions.getProducts()),
    getUserProducts: () => dispatch(productActions.getUserProducts()),
    getCategoriesList: () => dispatch(productActions.getCategoriesList()),
  };
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    drawerOpen: state.cart.drawerOpen,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);