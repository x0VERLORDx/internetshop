import arowdownImg from './../../img/icons/arrow-down.svg';
import './contentSliderStyle.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function handleClickArrowDown() {
    // Логика для кнопки со стрелкой вниз
    console.log('Переход вниз');
  }
  
function ContentSlider({ data } ) {
    const [titles, setTitles] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/api/titles')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setTitles(data);
    })
    .catch(error => {
      console.error('Error fetching titles:', error);
    });
}, []);

   // Используйте titles где-то в компоненте, чтобы избежать предупреждения
   console.log(titles);
    
    return (
        <section className="content-slider">
  <h1 className='title1_slide'>{/* {data.title1} */}Нові надходження в цьому сезоні</h1>
  <h3 className='title2_slide'>{/* {data.title2} */}Витончені поєднання та оксамитові відтінки - ось те, що ви шукали цього сезону. Час досліджувати.</h3>
  <div className='btn_slider_shop'>
    <button className='btn_arrowdown' onClick={handleClickArrowDown}>
      <img  src={arowdownImg} alt='Стрелка_вниз'/>
    </button>

    <Link className='goMagazine' to="/shop">Відкрити магазин</Link>
    </div>
    </section>
)
}

export default ContentSlider;