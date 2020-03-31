import React from 'react';
import { Button } from 'reactstrap';

const SideBarBottom = props => {

    return (
        <div >
            <hr />
            <div className='drawerBottomStyle'>
                <h4>{'SUBTOTAL:'}</h4>
                <h4 className="priceColor">{'$15.69'}</h4>
            </div>
            <div className="drawerBottomButton">
                <Button style={{ borderColor:'#F3F3F3',backgroundColor: "#F3F3F3", fontSize: 15, fontWeight: 500,color:'#333333' }} size="lg" block>VIEW CART</Button>
                <Button style={{ borderColor:'#722F2F',backgroundColor: "#722F2F", fontSize: 15, fontWeight: 500 }} size="lg" block>CHECKOUT</Button>
            </div>
        </div>

    );
}
export default SideBarBottom;