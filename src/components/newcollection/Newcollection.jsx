/* sfc - tab */
import './newcollection.css';
import { Link } from 'react-router-dom';

const Newcollection = () => {

    return (
      <section className="newcollection">
        <div className="conteiner">
          <div className="newcollection__header">
            <h2 className='title-2'>
              Рекомендовано
            </h2>
          </div>
          <div className="newcollection__cards">

          </div>
          <div className="newcollection__btn">
            <Link className='goMagazine' to="/shop">Відкрити магазин</Link>
          </div>
        </div>
      </section>
    );
  };
 
export default Newcollection;