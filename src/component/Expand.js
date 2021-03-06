import React, {  useState } from 'react';
import Arrow from '../img/arrow.png';

function Expandtest(prop) {  

    const [activeExpand, setActive] = useState(true);
    const toggleClass = () => {setActive(!activeExpand);};

    return(
               
        <div className={`${activeExpand ? "hidetext": null}`}  onClick={toggleClass}  >   
            <div className='titlExpand' >
                <h3>{prop.title}</h3><img src={Arrow} alt="" />
            </div>
            <div className='textExpandPage '>
            <p className='textContent'>{prop.contenu}</p>
            </div>
        </div>
        
    );
 }

function Expand (props) {  
    return (
        <div className='alltexts halfsize'>
           <Expandtest title="Description" contenu={props.data.description} />
           <Expandtest title="Equipements" contenu={
               props.data.equipments.map((equi)=>(
                    <li key={equi}>{equi}</li>
                ))}/>       
        </div>   
    );
};

export default Expand;