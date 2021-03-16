import React, { Component } from 'react';
import FooterLogo from '../css/img/Home_Construction_logo_White.png';
import '../css/custom.css';
// import '../css/style.css';

class Footer extends Component {
    render() {
        return (
            <footer id="mainFooter" className="fire_gradient">
               <img className="footer_image" src={FooterLogo} alt=""/> &copy; Home Construction
                2021
            </footer>
            
        );
    }
}

export default Footer
