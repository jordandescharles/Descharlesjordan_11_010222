import React,{useState} from 'react';
import ArrowLeft from '../img/arrowLeft.png';
import ArrowRight from '../img/arrowRight.png';


let total;


const Carousel = (props) => {

    const portfolio = props.data.pictures;
    const [current,setCurrent] = useState(0)
    const [activeImage,setActive] = useState(0)

    total = portfolio.length;

    return (
        <section className='slider'>

          <div className='arrows'>
                <img src={ArrowLeft} onClick={() => { setCurrent(current - 1); setActive(activeImage - 1)}} alt="previous" className={current === 0 ? 'hideArrow ' :'navArrow' } />
                <img src={ArrowRight} onClick={() => { setCurrent(current + 1); setActive(activeImage + 1)}} alt="next" className={current === total-1 ? 'hideArrow ' :'navArrow' } />
            </div>

            {portfolio.map((slide, index) => {
         
                return(
                    <div className={index === current ? 'slider active' : 'slide'} key={index}>
                        {index === current && ( <img src={slide} alt="vues de la location" key={slide} className="sliderImg" />)}
                    </div>
                )
                
            })}  
           
            
            <p className='indicator'>{activeImage +1 + "/" + total}</p>
            
        </section>
    );
}

export default Carousel;