import React from 'react';

const OfferHours = props => {

  return (
    <div className="offer_hours">
      <p>
        {props.value}
      </p>
      <p>{props.type?.toUpperCase()}</p>
    </div>
  );
}
export default OfferHours;
