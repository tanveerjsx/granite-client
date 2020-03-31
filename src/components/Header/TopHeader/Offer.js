import React, { Component } from 'react';
import { connect } from 'react-redux';

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="offer_message">
          <p >
            0% Financing !
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
              alt=""
            />
          </p>
          <p>Hurry! Offers Ends Soon!</p>
        </div>
      </div>
    );
  }
}
export default connect(null, null)(Offer);
