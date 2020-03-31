import React from 'react';
import './style.css';
import * as Constants from '../../../constants';

const HeaderComponent = (props) => {
    return (
        <div className="discription">
            <p>{Constants.DISCRIPTION_DETAILS}</p>
        </div>
    );
};


export default HeaderComponent;