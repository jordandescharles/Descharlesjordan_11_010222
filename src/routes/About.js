import BannerTop from '../component/BannerTop';
import Footer from '../component/Footer';
import Logo from '../component/Logo';
import MenuNav from '../component/MenuNav';

const About = () => {
    return (
        <div>
          <header className='header'>
      <Logo /> 
      <MenuNav />
      </header>
      <BannerTop />
      <Footer />
        </div>
    );
};

export default About;