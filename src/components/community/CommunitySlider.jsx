import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import comm1 from './../../img/brands/comm1.png';
import comm2 from './../../img/brands/comm2.png';
import comm3 from './../../img/brands/comm3.png';

import './communitySlider.css';


const CommunitySlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  

    return (
      <Slider {...settings}>
        <div className='slideStyleCommunity'>
          <img src={comm1} alt='slide-1' />
        </div>
        <div className='slideStyleCommunity'>
          <img src={comm2} alt='slide-2' />
        </div>
        <div className='slideStyleCommunity'>
          <img src={comm3} alt='slide-3' />
        </div>
      </Slider>
    );
  };

export default CommunitySlider;