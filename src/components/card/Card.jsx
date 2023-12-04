import styles from './Card.module.css';
import React, { useState } from 'react';
import colection1 from './../../img/colection/colection1.png';
/* import colection2 './../../img/colection/colection2.png';
import colection3 './../../img/colection/colection3.png';

 */
import arowRightImg from './../../img/icons/arrow-right.svg';


function handleClickArrowRight() {
    // Логика для кнопки со стрелкой вниз
    console.log('Переход вниз');
  }


const Card = () => {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
    return ( 
        <div className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                
            <div className={styles.crad__img_over}>
            <img className={styles.card__img} src={colection1} alt="newcollection_photo_1" />
            {isHovered && (
            <div className={styles.card__overlay}>
            <button className={styles.card__overlay_button} onClick={handleClickArrowRight}>
              <img src={arowRightImg} alt='Стрелка_вправо'/>
            </button>
          </div>
        )}
            </div>
            <div className={styles.card__body}>
                <div className={styles.card__name}>
                    Футболка USA
                </div>
                <div className={styles.card__price}>
                <div className={styles.card__oldprice}>
                    487
                </div>
                <div className={styles.card__newprice}>
                    129
                </div>
                </div>
            </div>
            </div>
     );
}
 
export default Card;