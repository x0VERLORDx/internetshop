import Header from './components/header/Header.jsx';
import Promo from './components/promo/Proomo.jsx';
import Newcollection from './components/newcollection/Newcollection.jsx';
import Advantages from './components/advantages/Advantages.jsx';
import NewDataCards from './services/NewDataCards.js';
/* import Arrivals from './components/arrivals/Arrivals.jsx'; */



//создаем экземпляр класса 

const newDataCards = new NewDataCards();

newDataCards.getAllCards().then(res => res.data.results.forEach(item => console.log(item.name))); /* console.log(res) *///Берем массив всех карточек, и выводим только название товара

function App() {
    return (
        <div className='App'>
        <Header />
        <Promo />
        <Newcollection />
        <Advantages />
        </div>
    )
}

export default App;