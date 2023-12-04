/* sfc - tab */
import Card from '../card/Card';
import './newcollection.css';


function handleClickOpenShop() {
    console.log('Открытие старницы магазина');
  }

const Newcollection = () => {
    return (  
        <section className="newcollection">
            <div className="conteiner">
                <div className="newcollection__header">
                    <h2 className='title-2'>
                        Нова колекція
                    </h2>
                </div>
                <div className="newcollection__cards">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="newcollection__btn">
                <button className='btn_openshop_null' onClick={handleClickOpenShop}>
                    Відкрити магазин
                </button>
                </div>
            </div>
        </section>
    );
}
 
export default Newcollection;