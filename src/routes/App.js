
import BannerTop from '../component/BannerTop';
import Cards from '../component/Cards';
import Footer from '../component/Footer';
import Logo from '../component/Logo';
import MenuNav from '../component/MenuNav';

function App() {
  return (
    <div className="App">
      <header className='header'>
      <Logo /> 
      <MenuNav />
      </header>
      <BannerTop />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
