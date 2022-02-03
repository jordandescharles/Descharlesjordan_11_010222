import Card from "./Card";
import Data from '../json/data'

const Cards = () => {

    return (
        <div className="cardsContainer" key={Data.id}>
            {Data.map((cardata)=>(
                <Card cardata={cardata} key={cardata.id}/>
            ))}
        </div>
    );
};

export default Cards;