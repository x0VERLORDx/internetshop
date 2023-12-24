import React from 'react';
import Header from '../header/Header.jsx';
import Promo from '../promo/Proomo.jsx';
import Newcollection from '../newcollection/Newcollection.jsx';
import Advantages from '../advantages/Advantages.jsx';
import Community from '../community/Community.jsx';
import Footer from '../footer/Footer.jsx';
/* import Arrivals from './components/arrivals/Arrivals.jsx'; */


function Home() {
    return (
        <div className='home'>
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