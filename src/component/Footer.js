import logoNb from '../img/logonb.png';

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoNb} alt="logo noir et blanc Kasa" />
            <p> © 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;