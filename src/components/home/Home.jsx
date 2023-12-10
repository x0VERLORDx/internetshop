import React from 'react';
import Header from '../header/Header.jsx';
import Promo from '../promo/Proomo.jsx';
import Newcollection from '../newcollection/Newcollection.jsx';
import Advantages from '../advantages/Advantages.jsx';
import Community from '../community/Community.jsx';
import NewDataCards from '../../services/NewDataCards.js';
import Footer from '../footer/Footer.jsx';
/* import Arrivals from './components/arrivals/Arrivals.jsx'; */



//создаем экземпляр класса 

const newDataCards = new NewDataCards();

newDataCards.getAllCards().then(res => res.data.results.forEach(item => console.log(item.name))); /* console.log(res) *///Берем массив всех карточек, и выводим только название товара

function Home() {
    return (
        <div className='Home'>
        <Header />
        <Promo />
        <Newcollection />
        <Advantages />
        <Community />
        <Footer />
        </div>
    )
}

export default Home;