import{ Link } from 'react-router-dom'

const Card = (props) => {
    const { cardata } = props;
    return (
        <article className="card" id={cardata.id}> 

            <Link to={`/CardPage/${cardata.id}`}>
            <div className="blackGradient"></div>
            <img src={cardata.cover} alt="" />
            </Link>

        <span> <h3>{cardata.title}</h3></span>
    </article> 
    );
};

export default Card;