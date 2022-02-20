import React, {  useState } from 'react';
import Arrow from '../img/arrow.png';

    
function Expandtest(prop) {  
    const [isActive, setActive] = useState(true);
    const toggleClass = () => {setActive(!isActive);};
    return(
        <>        
        <div className={`${isActive ? "hidetext": null}`}   onClick={toggleClass}  >   
            <div className='titlExpand' >
                <p>{prop.title}</p><img src={Arrow} alt="" />
            </div>
            <div className='textExpand '>
                <p>{prop.contenu}</p>
            </div>
        </div>
        </>
    );
 }

function ExpandAbout () {  
    return (
        <div className='alltexts alltexts_about'>
           <Expandtest title="Fiabilité" contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
           <Expandtest title="Respect" contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
           <Expandtest title="Service" contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
           <Expandtest title="Sécurité" contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>   
    );
};

export default ExpandAbout;
