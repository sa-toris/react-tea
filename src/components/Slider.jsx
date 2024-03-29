import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

import slide1 from '../assets/img/1.jpg';
import slide2 from '../assets/img/2.jpg';
import slide3 from '../assets/img/3.jpg';

const CarouselSlider = styled(Carousel)`
  .control-dots .dot {
    background: #50b360;
  }

  /* .carousel-slider {
    overflow: inherit;
  } */

  .control-next.control-arrow {
    background-color: transparent;
    right: 146px;
  }

  .control-prev.control-arrow {
    background-color: transparent;
    left: 146px;
  }

  .control-arrow .carousel-slider .control-arrow {
    opacity: 1;
  }

  .control-next.control-arrow:before {
    content: '';
    border: solid #ffff;
    border-width: 0 3px 3px 0;
    padding: 14px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .control-prev.control-arrow:before {
    content: '';
    border: solid #ffff;
    border-width: 0 3px 3px 0;
    padding: 14px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
`;

const Slide = styled.div`
  img {
    height: 100%;
    width: auto;
  }
`;

function Slider() {
  return (
    <CarouselSlider
      autoPlay={false}
      infiniteLoop={true}
      interval={5000}
      showThumbs={false}
      showStatus={false}>
      <Slide>
        <img src={slide3} />
        {/* <p className="legend">Legend 1</p> */}
      </Slide>
      <Slide>
        <img src={slide3} />
        {/* <p className="legend">Legend 2</p> */}
      </Slide>
      <Slide>
        <img src={slide3} />
        {/* <p className="legend">Legend 3</p> */}
      </Slide>
    </CarouselSlider>
  );
}

export default Slider;
