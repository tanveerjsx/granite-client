import React, { Component } from 'react'
import Slider from "react-slick";
import ProductInformationCard from './ProductInformationCard';

class ProductSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      swipe: true,
      rows: 1
    };
    return (
      <div><h2>Related Products</h2>
        <Slider className="sliderComponent" {...settings}>
          <ProductInformationCard
            description="Exudus 3cm"
          />
          <ProductInformationCard
            description="Brocco"
          />
          <ProductInformationCard
            description="Giallo Ornamental Amarillo"
          />
          <ProductInformationCard
            description="Crema Persia"
          />
          <ProductInformationCard
            description="Cheyenne"
          />
          <ProductInformationCard
            description="Desert Green"
          />
          <ProductInformationCard
            description="Dallas White"
          />
          <ProductInformationCard
            description="DFerrato"
          />
        </Slider>
      </div>
    )
  }
}

export default ProductSlider; 