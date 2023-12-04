import './advantages.css';
import advantugesImg1 from '../../img/icons/quality.svg';
import advantugesImg2 from '../../img/icons/speed.svg';
import advantugesImg3 from '../../img/icons/responsibilyty.svg';



const Advantages = () => {
    return ( 
        <section className="advantuges">
            <div className="conteiner">
            <h2 className="title-2">
            Що для нас важливо
            </h2>
            <div className="conteiner__block">
                <div className="advantuges__block1">
                    <div className="advantugesImg">
                        <img  src={advantugesImg1} alt=""/>
                    </div>
                    <h4 className="advantuges__title1">
                    Якість
                    </h4>
                    <h5 className='advantuges__title2'>
                    Наші професіонали працюють на найкращому устаткуванні для пошиття одягу безпрецедентної якості
                    </h5>
                </div>
                <div className="advantuges__block2">
                    <div className="advantugesImg">
                        <img  src={advantugesImg2} alt=""/>
                    </div>
                    <h4 className="advantuges__title1">
                    Швидкість
                    </h4>
                    <h5 className='advantuges__title2'>
                    Завдяки налагодженій системі у Womazing ми можемо відшивати до 20 одиниць продукції у наших власних цехах.                    </h5>
                </div>
                <div className="advantuges__block3">
                    <div className="advantugesImg">
                        <img  src={advantugesImg3} alt=""/>
                    </div>
                    <h4 className="advantuges__title1">
                    Відповідальність
                    </h4>
                    <h5 className='advantuges__title2'>
                    Ми дбаємо про людей та планету. Безвідходне виробництво та комфортні умови праці - все це Womazing                    </h5>
                </div>
            </div>
            </div>
        </section>
     );
}
 
export default Advantages;