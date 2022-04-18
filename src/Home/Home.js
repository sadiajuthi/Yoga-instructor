import React from 'react';
import img from '../image/banner.jpg'
import './Home.css'

import ExtraSection from '../ExtraSection/ExtraSection';
import Services from '../Services/Services';





const Home = () => {


    return (
        <div>
            <img className='w-100 h-50 banner mb-5' src={img} alt="" />
            <div className="title">
                <h1>Let's Get <br /> The <br /> Balance Of <br /> Living.</h1>
                <button className='btn bt-lg btn-success px-4 py-2'>Discover More</button>
            </div>
            <ExtraSection></ExtraSection>
            <section id="service" className='container'>
                <Services></Services>

            </section>


        </div>
    );
};

export default Home;