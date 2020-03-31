import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaRegEnvelope } from 'react-icons/fa';
import * as authActions from '../../../store/actions/authActions';
import './style.css';
import Offer from './Offer';
import OfferHours from './OfferHours';

class TopHeader extends Component {
  componentDidMount() {
    const { getToken } = this.props;
    getToken();
  }
  render() {
    return (
      <div className="topHeader">
        <div id="offers">
          <Offer />
        </div>
        <div id="offerhours">
          <OfferHours value={0} type={"days"} />
          <OfferHours value={0} type={"hr"} />
          <OfferHours value={0} type={"min"} />
          <OfferHours value={0} type={"sec"} />
        </div>
        <div>
          <Link to="/store">Store</Link>
        </div>
        <div>
          <Link to="/vendorregistration">Vendor Registration</Link>
        </div>
        <div>
          <Link to="/"><FaRegEnvelope /> News Letter</Link>
        </div>
        <div>
          <Link to="/AboutUs">About Us</Link>
        </div>
        <div>
          <Link to="/">Contact Us</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(authActions.getToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);
