import Logo from '../component/Logo';
import MenuNav from '../component/MenuNav';
import{ Link } from 'react-router-dom'
import Footer from '../component/Footer';


const NotFound = () => {
    return (
        <div>
               <header className='header'>
        <Logo /> 
        <MenuNav />
        </header>
            <h1 className='ultraBig'>404</h1>
           <h2 className='center'>Oups! La page que vous demandez n'existe pas.</h2> 
           <Link to="/"> <p className='text404 center'> Retourner sur la page d'accueil </p> </Link>
         <Footer />
        </div>
    );
};

export default NotFound;