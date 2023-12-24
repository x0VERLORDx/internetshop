import React from 'react';
import { Link } from 'react-router-dom';

import CommunitySlider from './CommunitySlider';
import './community.css'

const Community = () => {
    return ( 
    <section className="community">
            
            <div className="conteiner">

                <div className="community__content">
                    <div className="community__slider">
                    <CommunitySlider />
                    </div>

                    <div className="community__text">
                        <h4 className="community__title1">Для кожної</h4>
                        <h5 className='community__title2'>
                            Кожна дівчина є унікальною. Однак, ми схожі на мільйон дрібниць.<br /><br /> Womazing шукає ці дрібниці та створює чудові речі, які вигідно підкреслюють переваги кожної дівчини.
                        </h5>
                        <div className="community__page">
                        <Link to="/about">Детальніше про бренд</Link>
                        </div>
                    </div>
                </div>

            </div>


    </section>
    
    );
}
 
export default Community;