import{ NavLink } from 'react-router-dom'

const MenuNav = () => {
    return (
        <nav className='navMenu'>
        <NavLink to="/" style={({ isActive }) => ({
          borderBottom: isActive ? '2px solid #FF6060' : '#none', 
        })}
        >accueil</NavLink> 
        <NavLink to="/about" style={({ isActive }) => ({
          borderBottom: isActive ? '2px solid #FF6060' : '#none', 
        })}> à propos</NavLink>
      </nav>
    );
};

export default MenuNav;