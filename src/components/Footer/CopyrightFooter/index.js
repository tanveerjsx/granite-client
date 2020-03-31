import React, { Component } from 'react';
import paypal_card from '../../../images/master_card.png';
import './style.css';

const CopyrightFooter = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="text">
          <text className="text">Granite Warehouse. Copyright &copy; 2020. All rights reserved &reg;</text>
        </div>
        <div className="paymentOptions">
          <ul>
            <li><img src={paypal_card} alt=""></img></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CopyrightFooter;
