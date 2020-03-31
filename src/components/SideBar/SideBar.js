import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import SideBarProductList from './SideBarProductList';
import SideBarBottom from './SideBarBottom';
import * as cartActions from '../../store/actions/cartActions';
import * as Constants from '../../constants';
import './style.css'
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    w3_open = () => {
        this.props.drawerToggle()
    }

    w3_close = () => {
        this.props.drawerToggle()
    }
    render() {
        return (
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-right" style={{ display: this.props.drawerOpen ? 'block' : 'none', right: 0 }} id="rightMenu">
                    <div className='drawerStyle'>
                        <h4>{Constants.SHOPPING_CART.toUpperCase()}</h4>
                        <Button close
                            onClick={this.w3_close}
                        />
                    </div>
                    <hr />
                    <div className="sideBarMiddleList">
                        <SideBarProductList />
                        <SideBarProductList />
                    </div>
                   <div className="sideBarBottomMainComponent">
                   <SideBarBottom/>
                   </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        drawerOpen: state.cart.drawerOpen,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        drawerToggle: () => dispatch(cartActions.drawerToggle()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
