import React from 'react';
import Arrow from '../img/arrow.png';

const Expand = (props) => {
    const { data} = props;
    return (

        <div className='alltexts'>
       
        <div className='description half-size'>   
            <div className='titlExpand'>
                <p>Description</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand ' >
                <p>{data.description}</p>
            </div>
        </div>

        <div className='description half-size'>   
            <div className='titlExpand'>
                <p>Équipements</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand ' >
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