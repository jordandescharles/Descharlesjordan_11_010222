import aboutBanner from '../img/aboutbanner.png';
import banner from '../img/backbanner.png';

let urlImg = ''; 
let textH1 = '';

const BannerTop = () => {  
    
    // check wich page is active to change banner style  
    if (window.location.href.indexOf("about") > -1) {
       urlImg = aboutBanner;
       textH1= ''
      }
    else{
        urlImg = banner;
        textH1= 'Chez vous, partout et ailleurs' 
    }
     
    return (
        <div className="backBanner">
            <h1>{ textH1}</h1>
            <img src={urlImg} alt="banniere" />
        </div>
    );
};

export default BannerTop; 