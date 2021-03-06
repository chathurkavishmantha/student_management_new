import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CarouselImage01 from '../css/img/home.gif';
import CarouselImage02 from '../css/img/Carousel/carousel_img_2.png';
import ServiceImage01 from '../css/img/Services/customer-satisfaction.png';
import ServiceImage02 from '../css/img/Services/quality-service.png';
import ServiceImage03 from '../css/img/Services/trustworthy.png';
import MaleDefaultImage from '../css/img/male_default.jpg';
import FeaturetteImage01 from '../css/img/Featurette/construction-1.png';
import FeaturetteImage02 from '../css/img/Featurette/construction-2.png';
import FeaturetteImage03 from '../css/img/Featurette/construction-3.png';
import FeaturetteImage04 from '../css/img/Featurette/construction-4.png'; 
import '../css/custom.css';
// import '../js/aos.js';

class Home extends Component {
    render() {
        return (
            <main className="main-nopaddingUp fade show active">

                    {/* Featurette Strats here */}
                    <img className="carousel-img" src={CarouselImage01} alt="" />
                    
                        

                    {/* <!-- /.container --> */}
                {/* </section> */}

            {/* Featurette Ends Here */}
                {/* <div className="text-center jumbotron">
                <div className="text-center">
                        <h1><u>Design Your Home plan</u></h1>
                        <Link className="btn btn-md btn-primary" to="/arc_ml_data">Go to Page</Link>
                        <br/>
                    </div>
                    <div className="text-center">
                        <h1><u>Search Architect and Project Selection</u></h1> */}
                        {/* <Link className="btn btn-md btn-primary" to="/arc_list">Architecture List</Link> */}
                        <br/><br/>
                        {/* <Link className="btn btn-md btn-primary" to="/architecture_search_model">Go to Page</Link>
                        <br/>
                        
                    </div>
                    
                    <br/>
                </div> */}
                <br/>
            </main>
        );
    }
}

export default Home;
