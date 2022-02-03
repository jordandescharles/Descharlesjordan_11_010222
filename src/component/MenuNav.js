import{ Link } from 'react-router-dom'

const MenuNav = () => {
    return (
        <nav className='navMenu'>
        <Link to="/">accueil</Link> 
        <Link to="/about"> à propos</Link>
      </nav>
    );
};

export default MenuNav;