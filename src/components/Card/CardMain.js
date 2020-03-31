import React from 'react';
import { Col, } from 'reactstrap';
import CardComponent from './Card';

const CardMain = (props) => {
  const { data } = props;
  return (
    <Col sm="3">
      <CardComponent
        Description={data.name}
        price={`$${data.price}`}
        image={data.productPic[0].img}
      />
    </Col>
  );
};

export default CardMain;
