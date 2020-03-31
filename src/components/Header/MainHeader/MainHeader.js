import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FaRegUser, FaRegHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import './style.css';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Logo from '../../Logo';
import * as cartActions from '../../../store/actions/cartActions';
import * as authActions from '../../../store/actions/authActions';

class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="mainHeaderWrapper">
        <Container>
          <Row>
            <Col xs="1">
              <Logo />
            </Col>
            <Col xs="9" className="Search">
              <SearchBar />
            </Col>
            <Col xs="2">
              <IconBar drawerToggle={this.props.drawerToggle} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const SearchBar = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return <div className="searchOption">
    <Container fluid>
      <Row>
        <Col sm="8">
          <input type="text" placeholder="search for products" onChange={props.textChange} />
        </Col>
        <Col sm="3" style={{ margin: 0, }}>
          <Dropdown className="categoriesDropdown" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              SELECT CATEGORY
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Backsplash</DropdownItem>
              <DropdownItem>Porcelain</DropdownItem>
              <DropdownItem>Marble</DropdownItem>
              <DropdownItem>Quartz</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col sm="1">
          <button type="button">
            <FaSearch style={{ fontSize: '20px', color: '#777', fontWeight: 'normal' }} />
          </button>
        </Col>
      </Row>
    </Container>
  </div>
};

const IconBar = props => {
  return (
    <div className="iconBar">
      <FaRegUser color={props.color} />
      <FaRegHeart />
      <FaShoppingCart onClick={props.drawerToggle} />
      <span>$0.00</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    cart: state.cart,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getToken: () => dispatch(authActions.getToken()),
    drawerToggle: () => dispatch(cartActions.drawerToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
