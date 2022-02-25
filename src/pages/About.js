import BannerTop from '../component/BannerTop';
import ExpandAbout from '../component/ExpandAbout';
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
      <ExpandAbout />
      <Footer />
        </div>
    );
};

export default About;