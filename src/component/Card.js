
const Card = (props) => {
    const { cardata } = props;
    return (
        <article className="card">
            <div className="blackGradient"></div>
            <img src={cardata.cover} alt="" />
        <span> <h3>{cardata.title}</h3></span>
    </article> 
    );
};

export default Card;