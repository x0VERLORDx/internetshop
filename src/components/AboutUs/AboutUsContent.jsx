import React from 'react';

import aboutusph1 from './../../img/aboutus/photo1.png';
import aboutusph2 from './../../img/aboutus/photo2.png';
import './aboutUsContent.css';

/* 
function handleClickOpenShop() {
    console.log('Открытие старницы магазина');
  } */

const AboutUsContent = () => {
    function handleClickOpenShop() {
        console.log('Открытие страницы магазина');
        // Добавьте здесь логику для открытия страницы магазина
      }
    return ( 
    
    <div className="aboutusContent">
       <div className="container">
        <div className="grid-container">
      {/* Первый блок */}
      <div className="grid-item">
        <div className="aboutusPhoto">
      <img src={aboutusph1} alt='aboutus-photo1' />
      </div>
      <div className="aboutusContent__text">
        <h4 className="aboutusContent__title1">Ідея та жінка</h4>
        <h5 className='aboutusContent__title2'>
            Womazing була заснована у 2022-му і стала однією з найуспішніших компаній нашої країни. Як і багато італійських фірм, Womazing залишається сімейною компанією, хоча жоден із членів сім'ї не є модельєром.
            <br /><br />
            Ми діємо за успішною формулою, вдаючись до послуг відомих модельєрів для створення колекцій. Цей метод був описаний критиком моди Коліном Макдавеллом як форма дизайнерської співтворчості, характерна для низки італійських prêt-a-porter компаній.</h5>
        </div>
      </div>

      {/* Второй блок */}
      <div className="grid-item">
        <div className="aboutusContent__text">
        <h4 className="aboutusContent__title1">Магія в деталях</h4>
        <h5 className='aboutusContent__title2'>
        Перший магазин Womazing був відкритий у маленькому містечку на півночі країни у 2022-му році. Перша колекція складалася з двох пальт та костюма, які були копіями паризьких моделей.
            <br /><br />
            Незважаючи на те, що за освітою засновниця була адвокатом, її сім'я завжди була тісно пов'язана з шиттям (прабабуся засновниці шила одяг для жінок, а мати заснувала професійну школу крою та шиття). Прагнення виробляти одяг для мас несло великі перспективи, особливо в той час, коли висока мода, як і раніше, домінувала, а ринку якісного prêt-a-porter просто не існувало.
        </h5>
        </div>
        <div className="aboutusPhoto">
        <img src={aboutusph2} alt='aboutus-photo2' />
        </div>
      </div>
    </div>
    
        <div className="aboutusContent__btn">
    <button className='btn_openshop' onClick={handleClickOpenShop}>
        Відкрити магазин
    </button>
        </div>
    </div>
    </div>
     );
}
 
export default AboutUsContent;