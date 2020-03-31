import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import TopHeader from './TopHeader/TopHeader';
import MainHeader from './MainHeader/MainHeader';
import BottomHeader from './BottomHeader/BottomHeader';
import * as authActions from '../../store/actions/authActions';
import * as cartActions from '../../store/actions/cartActions';

class Header extends Component {
  componentDidMount() {
    const { auth } = this.props;
    if (auth.isAuthenticated) {
      this.props
        .getToken()
        .then(result => {
          if (result) {
            this.props.getCartItems(this.props.auth.token, this.props.auth.user.userId);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const { cart } = this.props;
    const cartCount = isAuthenticated ? cart.cartCount : '';

    return (
      <header className="Header">
        <TopHeader logout={this.logout} />
        <MainHeader cartCount={cartCount} />
        <BottomHeader />
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(authActions.getToken()),
    getCartItems: (token, userId) => dispatch(cartActions.getCartItems(token, userId)),
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
