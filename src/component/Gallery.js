import React,{useState} from 'react';
import ArrowLeft from '../img/arrowLeft.png';
import ArrowRight from '../img/arrowRight.png';


let total;

const Carousel = (props) => {

    const portfolio = props.data.pictures;
    const [current,setCurrent] = useState(0)
    const [activeImage,setActive] = useState(0)

    function checkindexmax(){
        if (current === portfolio.length-1){
            setCurrent(current - portfolio.length + 1)
            setActive(activeImage - portfolio.length + 1)
        }
    }
    function checkindexlow(){
        if (current === 0){
            setCurrent(current + portfolio.length - 1)
            setActive(activeImage + portfolio.length -1 )
        }
    }

    total = portfolio.length;



    return (
        <section className='slider'>

          <div className='arrows'>
                <img src={ArrowLeft} onClick={() => { setCurrent(current - 1); setActive(activeImage - 1) ;checkindexlow()}} alt="previous" className={portfolio.length === 1 ? 'hideArrow' :'navArrow ' } />
                <img src={ArrowRight} onClick={() => { setCurrent(current + 1); setActive(activeImage + 1) ;checkindexmax()}} alt="next" className={portfolio.length === 1 ? 'hideArrow' :'navArrow ' } />
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