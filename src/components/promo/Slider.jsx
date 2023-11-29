import React from 'react';
import './sliderStyles.css';
import Slider from 'react-slick';


import ContentSlider from './ContentSlider';



const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots',
    /* dotsClass: 'dots-style', */
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Пример данных, которые могут быть получены с сервера или другого источника
  const dataForSlider1 = { title1: 'Заголовок 1', title2: 'Подзаголовок 1' };
  const dataForSlider2 = { title1: 'Заголовок 2', title2: 'Подзаголовок 2' };
  const dataForSlider3 = { title1: 'Заголовок 3', title2: 'Подзаголовок 3' };

  return (
    <Slider {...settings}>
      <div className='slideStyles'>
      <ContentSlider data={dataForSlider1} />
      </div>
      <div className='slideStyles'>
      <ContentSlider data={dataForSlider2} />
      </div>
      <div className='slideStyles'>
      <ContentSlider data={dataForSlider3} />
      </div>
    </Slider>
  );
};

export default Carousel;/*  */