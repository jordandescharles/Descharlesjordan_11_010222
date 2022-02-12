import React, {  useState } from 'react';
import Arrow from '../img/arrow.png';

    
const Expand = (props) => {
    const {data} = props;

    const [isActive2, setActive2] = useState(true);
    const toggleClass2 = () => {setActive2(!isActive2);};
    const [isActive, setActive] = useState(true);
    const toggleClass = () => {setActive(!isActive);};
    
 
    return (

        <div className='alltexts'>
       
        <div className={`half-size ${isActive ? "hideText": null}`}  id='description' onClick={toggleClass}  >   
            <div className='titlExpand' >
                <p>Description</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand '>
                <p>{data.description}</p>
            </div>
        </div>

        <div className={`half-size ${isActive2 ? "hideText": null}`}  id='equipment' onClick={toggleClass2}>    
            <div className='titlExpand'>
                <p>Équipements</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand'  >
            <ul>
                {data.equipments.map((equi)=>(
                    <li key={equi}>{equi}</li>
                ))}
            </ul>
            </div>
        </div>  
        
        </div>
    );
};


export default Expand;