import{ Link } from 'react-router-dom'

const navigation = () => {
    return (
        <nav>
        <Link to="/">App</Link> |{" "}
        <Link to="/about">about</Link>
      </nav>
    );
};

export default navigation;