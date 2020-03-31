import React from 'react';
import { Button } from 'reactstrap';
import * as Constants from '../../constants';
import sideBarImage from '../../images/1.jpg'
const SideBarProductList = props => {

    return (
        <div >
            <div className="sideBarMainView">

            <div className='sideBarproductListContainer'>
            <img className="sideBarImageproductList" src={sideBarImage} />
           <div>
            <p className="sideBarPriceTitle"> Absolute Black </p>
            <p className="sideBarPriceTag"> $15.69 </p>
            </div>
            </div>
            <Button close />
            </div>
        </div>

    );
}
export default SideBarProductList;