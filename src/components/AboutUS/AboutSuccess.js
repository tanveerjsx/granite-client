import React from 'react';
import * as Constants from '../../constants';
import './style.css';

const AboutSuccess = (props) => {
    return (

        <div className="successDiv">
            <div className="successInside" >
                <p>{Constants.XTEMOS_CREATIVE}</p>
                <h1>{Constants.OUR_SUCCESS}</h1>
                <h1>{Constants.HISTORY}</h1>
                <p>{Constants.WONDERFULL_SERENITY}</p>
                <div className="btnWrapper" >
                    <button className="sucessBtn">{Constants.SEE_PROJECTS}</button>
                    <button className="sucessBtn2">{Constants.VIEW_MORE}</button>
                </div>
            </div>


        </div>
    );
};

export default AboutSuccess;
