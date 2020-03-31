import React, { Component } from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import Products from './Products/Products';
import Header from '../Header/Header';
import Footer from '../Footer';
import Home from './Home/Home';


class ShopStore extends Component {

  state = {
    categoryTitle: 'Products'
  }

  render() {

    return (
      <>
        <div style={{ display: this.props.drawerOpen ? 'block' : 'none', height: '1080vh', zIndex: 1, backgroundColor: 'rgba(0,0,0,0.7)', width: '100%', position: 'absolute' }} />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:slug" component={Products} />
        </Switch>
        <Footer />
      </>

    );
  }
}

const mapStateToProps = state => {
  return {
    drawerOpen: state.cart.drawerOpen,
  };
};
export default connect(mapStateToProps)(ShopStore);
