import Data from '../json/data'
import Footer from '../component/Footer';
import Logo from '../component/Logo';
import MenuNav from '../component/MenuNav';
import BannerCard from '../component/BannerCard';
import { useParams } from 'react-router';
import Expand from '../component/Expand';
import Carousel from '../component/Carousel';

let dataFiltered;

function filterData(id){
        dataFiltered = Data.filter(function(card){
            return card.id.includes(id);
        });
        
        }

function CardPage() {
 
    const params = useParams() 
    filterData(params.id)
    let dataOk=dataFiltered[0];

  return (
    <div className="App">
        <header className='header'>
        <Logo /> 
        <MenuNav />
        </header>
        <Carousel data={dataOk} key={dataOk.id + "car"}/> 
        <BannerCard data={dataOk} key={dataOk.id}/>
        
        <Expand data={dataOk} key={dataOk.title}/>
      

      <Footer />
    </div>
  );
}

export default CardPage;