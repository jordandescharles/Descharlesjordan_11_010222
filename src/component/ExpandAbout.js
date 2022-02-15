import React, {  useState } from 'react';
import Arrow from '../img/arrow.png';

    
function ExpandAbout() {

    const [isActive, setActive] = useState(true);
    const toggleClass = () => {setActive(!isActive);};

    const [isActive2, setActive2] = useState(true);
    const toggleClass2 = () => {setActive2(!isActive2);};

    const [isActive3, setActive3] = useState(true);
    const toggleClass3 = () => {setActive3(!isActive3);};
    
    const [isActive4, setActive4] = useState(true);
    const toggleClass4 = () => {setActive4(!isActive4);};
 
    return (

        <div className='alltexts alltexts_about'>
       
        <div className={`full-size ${isActive ? "hideText": null}`}  onClick={toggleClass}  >   
            <div className='titlExpand' >
                <p>Fiabilité</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand '>
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
            </div>
        </div>

        <div className={`full-size ${isActive2 ? "hideText": null}`}  onClick={toggleClass2}  >   
            <div className='titlExpand' >
                <p>Respect</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand '>
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>            </div>
        </div>

        <div className={`full-size ${isActive3 ? "hideText": null}`}  onClick={toggleClass3}  >   
            <div className='titlExpand' >
                <p>Service</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand '>
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>            </div>
        </div>

        <div className={`full-size ${isActive4 ? "hideText": null}`}  onClick={toggleClass4}  >   
            <div className='titlExpand' >
                <p>Sécurité</p>
                <img src={Arrow} alt="" />
            </div>
            <div className='textExpand '>
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>            </div>
        </div>

       
        
        </div>
    );
};


export default ExpandAbout;