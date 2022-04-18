import React from 'react';
import img from '../image/banner.jpg'
import './Home.css'

import ExtraSection from '../ExtraSection/ExtraSection';
import Services from '../Services/Services';
import { useNavigate } from 'react-router-dom';





const Home = () => {
    const navigate = useNavigate();
    const handleDiscoverMore = () => {
        navigate('/home#service')
    }
    return (
        <div>
            <img className='w-100 h-50 banner mb-5' src={img} alt="" />
            <div className="title">
                <h1>Let's Get <br /> The <br /> Balance Of <br /> Living.</h1>
                <button onClick={handleDiscoverMore} className='btn bt-lg btn-success px-4 py-2'>Discover More</button>
            </div>
            <ExtraSection></ExtraSection>
            <div className='service container'>
                <Services></Services>
            </div>





        </div>
    );
};

export default Home;