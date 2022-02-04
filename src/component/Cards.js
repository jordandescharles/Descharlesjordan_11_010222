import Card from "./Card";
import Data from '../json/data'

const Cards = () => {

    return (
        <div className="cardsContainer" key={Data.id}>
            <section className="cardAlign">
            {Data.map((cardata)=>(
                <Card cardata={cardata} key={cardata.id}/>
            ))}
            </section>
        </div>
        
    );
};

export default Cards;