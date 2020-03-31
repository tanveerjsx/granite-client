import React from 'react';
import { Link } from 'react-router-dom';
import * as Constants from '../../constants';
import './style.css';
import recentImage from '../../images/design.jpeg'
const RecentPostComponent = (props) => {
    return (
        <>
            <div className="recentPostContainer">
                <div>
                <Link to="/blog/products"> <img className="recentPost" src={recentImage} /></Link>
                </div>
                <div>
                    <Link to="/blog/products"><p> {Constants.MINIMAL_DESIGN}</p></Link>
                    <p> June 14, 2017 </p>
                </div>
            </div>
            <hr />
        </>
    );
};

export default RecentPostComponent;