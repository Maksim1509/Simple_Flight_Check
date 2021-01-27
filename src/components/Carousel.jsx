/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img className="carousel-img" src="./img1.png" alt="ny" />
        </div>
        <div>
          <img className="carousel-img" src="./img2.png" alt="ny" />
        </div>
        <div>
          <img className="carousel-img" src="./img3.png" alt="ny" />
        </div>
        <div>
          <img className="carousel-img" src="./img1.png" alt="ny" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
