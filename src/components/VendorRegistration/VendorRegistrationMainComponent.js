import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const VendorRegistrationMainComponent = (props) => {
    return (
        <div className="vendorRegistrationMainComponent">
            <h1>{props.titleHome}</h1>
            <div className="linkWrapper">
                <div>
                    <Link to="/"><p>{props.homeNavigate}</p></Link>
                </div>
                <p>/</p>
                <p>{props.currentNavigation.toUpperCase()}</p>
            </div>
        </div>
    );
};

export default VendorRegistrationMainComponent;