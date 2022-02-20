import Card from "./Card";
import Data from '../json/data';

const Cards = () => {

    return (
        <main className="cardsContainer" key={Data.id}>
            <section className="cardAlign">
            {Data.map((cardata)=>(
                <Card cardata={cardata} key={cardata.id}/>
              
            ))}
            </section>
        </main>
        
    );
}; 

export default Cards;