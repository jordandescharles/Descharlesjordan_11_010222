import React from 'react';
import Star from '../img/star.svg'


const BannerCard = (props) => {
    const { data} = props;
    
    let rating = data.rating;

  return (
    <>
      <article className='cardTop'>  
        <div className='left'>
            <h2>{data.title}</h2>
            <h4>{data.location}</h4>

            <ul>
                {data.tags.map((tag)=>(
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        </div>
        <div className='right'>
            <div className='profilecard'>
                <p>{data.host.name}</p>
                <img className='profile' src={data.host.picture} alt="" />            
            </div> 
            <span className={'star'+ rating} id='starbase' >
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
                <img src={Star} alt="" className='star'/>
            </span>
            </div>
    </article>
             
    </>
  )
}
export default BannerCard





